import en from '../locales/en.json';
import es from '../locales/es.json';

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: ['en', 'es'],
  silentTranslationWarn: true,
  messages: {
    es,
    en,
  },
}));