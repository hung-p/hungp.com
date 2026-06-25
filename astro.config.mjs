// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://hungp.com',
  // Legacy routes
  redirects: {
    '/blog': '/research',
    '/studio': '/projects',
  },
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: false, // We import global.css manually
  })],
});