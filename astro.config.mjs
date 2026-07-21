import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://strivn.net',
  integrations: [sitemap()],
  // The combined live page shipped briefly before being split into
  // live-session and live-match. Séance is the usage the campaign links to.
  redirects: {
    '/fr/features/live/': '/fr/features/live-session/',
    '/en/features/live/': '/en/features/live-session/',
    '/nl/features/live/': '/nl/features/live-session/',
    '/de/features/live/': '/de/features/live-session/',
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
