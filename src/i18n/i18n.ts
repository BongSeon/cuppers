import { createI18n } from 'vue-i18n'
import en from '@/i18n/locales/en.json'
import ja from '@/i18n/locales/ja.json'
import ko from '@/i18n/locales/ko.json'

const messages = {
  en,
  ko,
  ja,
}

let lang = localStorage.getItem('lang')
lang = lang ? lang : 'ko'

const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: 'en', // set fallback locale
  messages: messages,
  // globalInjection: true, // 기본값 true
  warnHtmlMessage: false, // disable warning HTML in message
})

export default i18n
