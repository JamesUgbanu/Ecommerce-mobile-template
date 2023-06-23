import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import sp from './sp';

const resources = { // list of languages
    en,
    sp
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'en', // default language to use.
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;