import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import en from './locales/en/translations.json';
import fa from './locales/fa/translations.json';

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('en'),
    init: () => { },
    cacheUserLanguage: () => { },
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en,
            fa,
        },
    });
// i18next.languages = ['en', 'fa'];

//default start up language
// i18next.changeLanguage('fa');

module.exports = i18next;
