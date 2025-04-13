import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://devcjs.co.kr',
  base: '/',
  outDir: '../docs',
  compressHTML: true,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    react()
  ],
  srcDir: './src',
  vite: {
    resolve: {
      alias: {
        '@': './src',
      },
    },
  },
});
