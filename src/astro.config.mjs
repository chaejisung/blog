// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://devcjs.co.kr',
  base: '/',                 
  outDir: '../docs',          
  integrations: [
    react(),
    // mdx(),
    // sitemap(),
  ],
});
