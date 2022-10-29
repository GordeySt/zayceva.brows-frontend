import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation_en from '../locales/en/translation.json'
import translation_ru from '../locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
    ns: ['translation'],
    resources: {
      ru: { translation: translation_ru },
      en: { translation: translation_en },
    },
  })
