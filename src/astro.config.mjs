import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://devcjs.co.kr',
  base: '/',
  outDir: '../docs',
  srcDir: './src/src', // ✅ 실제로 index.astro 있는 경로 기준
  compressHTML: true,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src/src', import.meta.url).pathname // ✅ 절대경로 alias도 맞춰야 함
      },
    },
  },
});
