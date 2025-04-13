import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://devcjs.co.kr',
  base: '/blog/',
  outDir: '../docs',
  srcDir: './src', 
  compressHTML: true,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    react()
  ],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname  //vite.resolve.alias는 astro.config.mjs 기준 경로(따라서 ./src/src가 아닌 ./src)
      },
    },
  },
});
