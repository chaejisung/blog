// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://devcjs.co.kr',       // 배포될 사이트 주소
  base: '/',                          // 루트 경로
  publicDir: './public',              // 정적 파일 디렉토리 (기본)
  outDir: '../docs',                   // GitHub Pages 용도
  compressHTML: true,                 // HTML 압축 활성화
  trailingSlash: 'ignore',            // URL 슬래시 처리 (필요 시 'always' / 'never')
  output: 'static',                   // 정적 사이트 생성
  integrations: [
    react(),                          // React 컴포넌트 지원
    // mdx(),                         // 필요 시 MDX 지원 추가 가능
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
