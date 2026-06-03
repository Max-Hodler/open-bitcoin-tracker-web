// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// English is the default and stays at the site root (no /en/ prefix); the other
// nine languages are served under a path prefix. Portuguese is the one locale
// whose URL segment (pt) differs from its BCP-47 code (pt-BR) — the `codes`
// array makes Astro.currentLocale resolve to 'pt-BR' on the /pt/ route while
// the URL stays short. The locale list here is the single source of truth that
// the translation layer (src/i18n) and the language switcher build on.
const locales = ['en', 'es', { path: 'pt', codes: ['pt-BR', 'pt'] }, 'ru', 'tr', 'vi', 'ja', 'fr', 'de', 'it'];

// https://astro.build/config
export default defineConfig({
  site: 'https://openbitcointracker.com',
  i18n: {
    defaultLocale: 'en',
    locales,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Keys are URL path segments, values are the hreflang code emitted for
      // each — so /pt/ pages advertise hreflang="pt-BR".
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          pt: 'pt-BR',
          ru: 'ru',
          tr: 'tr',
          vi: 'vi',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          it: 'it',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
