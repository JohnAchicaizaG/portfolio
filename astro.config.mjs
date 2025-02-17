// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import reactI18next from 'astro-react-i18next';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), reactI18next({
    defaultLocale: 'es-ES',
    locales: ['en-US', 'es-ES'], 
    defaultNamespace: 'common',
    namespaces: ['common'],
  }),]
});