// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: "https://josuedev09.github.io/disenointeriores/",
  base: "/disenointeriores/",
  outDir: "./dist", // carpeta de salida del build
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});