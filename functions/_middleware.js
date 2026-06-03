/**
 * Cloudflare Pages Function — Accept-Language auto-redirect.
 *
 * The site is a static Astro build. English lives at the root (/), the other
 * nine languages live under a path prefix (/es/, /pt/, /ru/, /tr/, /vi/, /ja/,
 * /fr/, /de/, /it/). When a first-time visitor lands on the bare root we read
 * the Accept-Language header the browser already sends and 302 them to the
 * locale that best matches. English speakers and unmatched languages stay on /.
 *
 * Privacy properties (see the bottom of this file for the full statement):
 *   - No new data is collected. We read one header the browser already sends,
 *     match it in memory, and discard it. Nothing is stored, transmitted, or
 *     logged. No IP geolocation, no fingerprinting, no analytics, no third
 *     party calls.
 *   - The only state is an optional strictly-functional preference cookie
 *     (`lang`) holding a locale code so we don't fight a manual switch and so
 *     auto-redirect runs only once. It is consent-exempt under GDPR/ePrivacy.
 */

// URL path segment -> the BCP-47 prefixes that should resolve to it. English is
// intentionally absent: it is the root and is never a redirect target. The `pt`
// segment maps from both pt-BR and the bare pt, mirroring astro.config.mjs.
const LOCALE_MATCHERS = [
  { path: 'es', prefixes: ['es'] },
  { path: 'pt', prefixes: ['pt'] }, // pt-BR, pt-PT, pt all start with "pt"
  { path: 'ru', prefixes: ['ru'] },
  { path: 'tr', prefixes: ['tr'] },
  { path: 'vi', prefixes: ['vi'] },
  { path: 'ja', prefixes: ['ja'] },
  { path: 'fr', prefixes: ['fr'] },
  { path: 'de', prefixes: ['de'] },
  { path: 'it', prefixes: ['it'] },
];

// Every path segment we manage, including the implicit root locale, so we can
// recognise an already-localized URL and a valid cookie value.
const LOCALE_PATHS = new Set(LOCALE_MATCHERS.map((m) => m.path));
const COOKIE_LOCALES = new Set([...LOCALE_PATHS, 'en']);

const COOKIE_NAME = 'lang';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days, in seconds.

/**
 * Parse Accept-Language into a quality-ordered list of lowercase tags.
 * e.g. "de-DE,de;q=0.9,en;q=0.8" -> ["de-de", "de", "en"]
 */
function parseAcceptLanguage(header) {
  if (!header) return [];
  return header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      let q = 1;
      for (const p of params) {
        const m = p.trim().match(/^q=([0-9.]+)$/);
        if (m) q = parseFloat(m[1]);
      }
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter((e) => e.tag && e.tag !== '*' && e.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((e) => e.tag);
}

/**
 * Walk the visitor's ordered language tags and return the first one that maps
 * to a supported locale path. Returns null when nothing matches (caller keeps
 * the visitor on the English root). English tags match nothing here on purpose.
 */
function matchLocalePath(acceptLanguage) {
  for (const tag of parseAcceptLanguage(acceptLanguage)) {
    const base = tag.split('-')[0];
    if (base === 'en') return null; // English -> stay at root.
    for (const { path, prefixes } of LOCALE_MATCHERS) {
      if (prefixes.some((p) => tag === p || base === p)) return path;
    }
  }
  return null;
}

function readCookie(request, name) {
  const header = request.headers.get('Cookie');
  if (!header) return null;
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    if (part.slice(0, idx).trim() === name) return part.slice(idx + 1).trim();
  }
  return null;
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const { pathname } = url;

  // Only ever consider redirecting a GET/HEAD for the bare root. Everything
  // else — prefixed locale URLs, /about, /privacy, assets, robots.txt, the
  // sitemap, anything with a file extension — passes straight through. This is
  // also what makes redirect loops impossible: a redirect target like /de/ is
  // not the bare root, so it is never re-evaluated.
  const isRootRequest =
    (request.method === 'GET' || request.method === 'HEAD') &&
    (pathname === '/' || pathname === '/index.html');

  if (!isRootRequest) {
    return next();
  }

  // Respect a remembered manual choice. If the visitor previously picked a
  // language (cookie set to a known locale), honour it and never auto-redirect
  // against it. 'en' means "they want the root" -> serve root as-is.
  const cookie = readCookie(request, COOKIE_NAME);
  if (cookie && COOKIE_LOCALES.has(cookie)) {
    if (cookie === 'en' || !LOCALE_PATHS.has(cookie)) {
      return next();
    }
    return Response.redirect(`${url.origin}/${cookie}/`, 302);
  }

  // First-time visitor on the root: detect from the header.
  const target = matchLocalePath(request.headers.get('Accept-Language'));

  if (!target) {
    // English or unmatched -> stay on the root. Remember that so we don't
    // re-parse on every subsequent root visit. (Stateless fallback is also
    // fine; the cookie is purely an optimisation here.)
    const response = await next();
    return withLangCookie(response, 'en', url);
  }

  // 302 (temporary) so the root stays canonical for crawlers and so a later
  // header/preference change is honoured. The Set-Cookie remembers the choice
  // so this detection runs only once per visitor.
  const redirect = new Response(null, {
    status: 302,
    headers: {
      Location: `${url.origin}/${target}/`,
      // Vary so shared caches don't serve one visitor's redirect to another.
      Vary: 'Accept-Language, Cookie',
    },
  });
  return withLangCookie(redirect, target, url);
}

function withLangCookie(response, value, url) {
  // Clone into a mutable response so we can attach Set-Cookie even on the
  // static asset response returned by next().
  const res = new Response(response.body, response);
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  res.headers.append(
    'Set-Cookie',
    `${COOKIE_NAME}=${value}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`
  );
  return res;
}

/*
 * ─── Privacy statement ──────────────────────────────────────────────────────
 * This function collects and stores nothing about the visitor and adds no
 * consent obligation:
 *
 *   • Input is the Accept-Language header the browser already sends on every
 *     request. It is read into memory, matched against a static list, and
 *     discarded. It is never stored, forwarded, or logged. There is no
 *     console.log of any request data anywhere in this file.
 *   • No IP address is read, no geolocation, no User-Agent fingerprinting, no
 *     navigator.languages, no analytics, no third-party network calls.
 *   • The only persisted state is the `lang` cookie: a single locale code, no
 *     identifier, Path=/, SameSite=Lax, Secure on HTTPS, Max-Age 180 days. It
 *     exists solely to remember the visitor's language so auto-redirect doesn't
 *     override a manual switch and runs only once. That makes it a
 *     "strictly necessary"/strictly-functional preference cookie, which is
 *     consent-exempt under GDPR / the ePrivacy Directive — no banner required.
 * ────────────────────────────────────────────────────────────────────────────
 */
