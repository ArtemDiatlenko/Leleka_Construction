export const APP_LANGS = ['pl', 'uk', 'en'] as const;
export const DEFAULT_LANG = 'pl';

export type AppLang = (typeof APP_LANGS)[number];

export function isAppLang(lang: string | null | undefined): lang is AppLang {
  return APP_LANGS.includes(lang as AppLang);
}

export function toAppLang(lang: string | null | undefined): AppLang {
  return isAppLang(lang) ? lang : DEFAULT_LANG;
}
