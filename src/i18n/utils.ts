import { getLocaleByPath } from 'astro:i18n';
import { ui, defaultLang, type Lang } from './ui';

/**
 * Normalize whatever `Astro.currentLocale` hands us (a BCP-47 code like
 * 'pt-BR', a bare path code, or undefined on the un-prefixed English root)
 * into a key of `ui`, falling back to English.
 */
export function resolveLang(currentLocale: string | undefined): Lang {
  if (currentLocale && currentLocale in ui) return currentLocale as Lang;
  return defaultLang;
}

/**
 * The standard Astro i18n recipe: hand it `Astro.currentLocale` and get back
 * the fully-typed dictionary for the active language. Components do
 * `const t = useTranslations(Astro.currentLocale)` and read `t.hero.title`,
 * etc. — no prop drilling.
 */
export function useTranslations(currentLocale: string | undefined) {
  return ui[resolveLang(currentLocale)];
}

/**
 * Value for the `<html lang>` attribute. The resolved key is already the
 * BCP-47 code we want (including 'pt-BR').
 */
export function htmlLang(currentLocale: string | undefined): string {
  return resolveLang(currentLocale);
}

// The keepandroidopen.org banner only ships a subset of languages; anything
// else degrades to English rather than 404-ing its localized content.
const KAO_SUPPORTED = new Set(['en', 'es', 'de', 'fr', 'it', 'pt', 'ru', 'tr']);

/**
 * Map the active locale to a `lang=` value the KeepAndroidOpen banner script
 * supports, falling back to English. Tries the full code then the base
 * subtag (so 'pt-BR' → 'pt').
 */
export function kaoLang(currentLocale: string | undefined): string {
  const lang = resolveLang(currentLocale);
  if (KAO_SUPPORTED.has(lang)) return lang;
  const base = lang.split('-')[0];
  return KAO_SUPPORTED.has(base) ? base : 'en';
}

/**
 * Strip a leading locale segment from a pathname, returning the locale-agnostic
 * remainder ('' for home, 'about', 'privacy'). Used to build the same page's
 * URL in every locale for the switcher and hreflang tags.
 *
 *   /es/about -> 'about'      /about -> 'about' (English root, no prefix)
 *   /pt/      -> ''           /      -> ''
 */
export function stripLocale(pathname: string): string {
  const segs = pathname.split('/').filter(Boolean);
  if (segs.length === 0) return '';
  try {
    // Throws if the first segment isn't a configured locale path.
    getLocaleByPath(segs[0]);
    return segs.slice(1).join('/');
  } catch {
    return segs.join('/');
  }
}
