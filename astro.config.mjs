import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://strivn.net',
  integrations: [sitemap()],
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
