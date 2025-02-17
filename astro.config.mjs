import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import reactI18next from 'astro-react-i18next';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      // Asegúrate de que React y su soporte están bien integrados
      react(),
    ],
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
  integrations: [
    react(),
    reactI18next({
      defaultLocale: 'es-ES',
      locales: ['en-US', 'es-ES'], 
      defaultNamespace: 'common',
      namespaces: ['common'],
    }),
  ],
});
