import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguagueDetector from "i18next-browser-languagedetector";

import translationInEng from "../locales/en/translation.json"
import translationInEsp from "../locales/es/translation.json"

const resources = {
    en: {
        translation: translationInEng
    },
    es: {
        translation: translationInEsp
    },
};


i18n
    .use(LanguagueDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("lang"),
        fallbackLng: 'es',
        debug: true,
        ns: "translation",
        defaultNS: "translation"
    });

export default i18n;