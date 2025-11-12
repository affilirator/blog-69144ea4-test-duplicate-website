
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://affilirator.github.io/blog-69144ea4-test-duplicate-website/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});
