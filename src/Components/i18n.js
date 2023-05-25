// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // Specify the supported languages
  lng: "en", // default language
  fallbackLng: "en", // fallback language

  // Configure the translation resources
  resources: {
    en: {
      translation: {
        greeting: "Hello!",
        farewell: "Goodbye!",
      },
    },
    mn: {
      translation: {
        greeting: "Hi!",
        farewell: "Bye",
      },
    },
  },

  // Common namespace used in the translation files
  ns: ["translation"],
  defaultNS: "translation",

  // Debug mode (optional)
  debug: true,

  // Interpolation options (optional)
  interpolation: {
    escapeValue: false, // not needed for React
  },
});

export default i18n;
