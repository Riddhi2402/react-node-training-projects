import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationGerman from './Languages/german.json';
import translationFrench from './Languages/french.json';
import translationHindi from './Languages/hindi.json';
import translationEnglish from './Languages/english.json';
import { Text } from '../../Assets/constant';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      english: {
        translations: translationEnglish,
      },
      german: {
        translations: translationGerman,
      },
      french: {
        translations: translationFrench,
      },
      hindi: {
        translations: translationHindi,
      },
    },
    debug: true,

    fallbackLng: Text.fallbackLanguage, // use en if detected lng is not available
    detection: {
      order: [Text.languageDetectionProperty],
      caches: [Text.casheProperty],
    },

    // have a common namespace used around the full app
    ns: [Text.nameSpace],
    defaultNS: Text.defaultNameSpace,
  });

export default i18n;
