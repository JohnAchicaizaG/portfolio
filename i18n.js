import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const savedLang = localStorage.getItem('language') || 'en-US';

i18n
  .use(Backend) // Carga archivos JSON desde /public/locales
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/common.json', // Ruta de los JSON de traducción
    },
    lng: savedLang,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;