import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://strivn.net',
  integrations: [
    sitemap({
      // Redirect stubs of the Teamworks page's earlier slugs stay out.
      filter: (page) =>
        !page.includes('/fr/alternative-teamworks-opteamal') && !page.includes('/alternative-opteamal/'),
    }),
  ],
  // The combined live page shipped briefly before being split into
  // live-session and live-match. Séance is the usage the campaign links to.
  redirects: {
    // Campaign links reach for the French word; the page itself keeps the
    // English slug, as /features/ and /solutions/ do in every locale.
    '/fr/tarifs/': '/fr/pricing/',
    // Earlier slugs of the Teamworks page: the first French one, then the
    // Opteamal switch page it grew from (shipped 2026-10-15, one locale each).
    '/fr/alternative-teamworks-opteamal/': '/fr/alternative-teamworks/',
    '/fr/alternative-opteamal/': '/fr/alternative-teamworks/',
    '/en/alternative-opteamal/': '/en/alternative-teamworks/',
    '/nl/alternative-opteamal/': '/nl/alternative-teamworks/',
    '/de/alternative-opteamal/': '/de/alternative-teamworks/',
    '/pt/alternative-opteamal/': '/pt/alternative-teamworks/',
    '/es/alternative-opteamal/': '/es/alternative-teamworks/',
    '/fr/features/live/': '/fr/features/live-session/',
    '/en/features/live/': '/en/features/live-session/',
    '/nl/features/live/': '/nl/features/live-session/',
    '/de/features/live/': '/de/features/live-session/',
    '/pt/features/live/': '/pt/features/live-session/',
    '/es/features/live/': '/es/features/live-session/',
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Three.js is a separate, deliberately-lazy chunk (canvas ambient
      // layer). The default 500 kB warning is a false positive here.
      chunkSizeWarningLimit: 1024,
    },
  },
});
