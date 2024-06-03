import { createI18n } from 'vue-i18n'
import { LOCALE_ENUM } from './constants'
import enUS from './langs/en-US.json';
import zhCN from './langs/zh-CN.json';
import zhTW from './langs/zh-TW.json';
import ptBR from './langs/pt-BR.json';
import jaJP from './langs/ja-JP.json';
import heIL from './langs/he-IL.json';
import koKR from './langs/ko-KR.json';
import frFR from './langs/fr-FR.json';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: enUS,
    'en-US': enUS,
    zh: zhCN,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    pt: ptBR,
    'pt-BR': ptBR,
    ja: jaJP,
    'ja-JP': jaJP,
    he: heIL,
    'he-IL': heIL,
    ko: koKR,
    'ko-KR': koKR,
    fr: frFR,
    'fr-FR': frFR,
  },
});

export const getDefaultLocale = () => LOCALE_ENUM.en_US

export const setI18nLocale = (locale: LOCALE_ENUM): LOCALE_ENUM => {
  i18n.global.locale.value = locale
  return locale
}

export const getI18nLocale = (): LOCALE_ENUM => {
  return (i18n.global.locale.value as LOCALE_ENUM) || getDefaultLocale()
}

export default i18n;
