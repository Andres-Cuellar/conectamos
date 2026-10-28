import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Allow restricted environments to keep Vite's disposable cache outside the project.
  cacheDir: process.env.ASTRO_CACHE_DIR ?? './node_modules/.astro',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
