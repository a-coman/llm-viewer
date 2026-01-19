// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/llm-viewer/',
  vite: {
    plugins: [tailwindcss()]
  }
});