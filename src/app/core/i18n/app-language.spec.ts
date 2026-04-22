import { APP_LANGS, DEFAULT_LANG, isAppLang, toAppLang } from './app-language';

describe('app-language', () => {
  it('defines the supported project languages', () => {
    expect(APP_LANGS).toEqual(['pl', 'uk', 'en']);
    expect(DEFAULT_LANG).toBe('pl');
  });

  it('recognizes supported language codes', () => {
    expect(isAppLang('pl')).toBeTrue();
    expect(isAppLang('uk')).toBeTrue();
    expect(isAppLang('en')).toBeTrue();
    expect(isAppLang('de')).toBeFalse();
    expect(isAppLang(null)).toBeFalse();
  });

  it('falls back to the default language for unsupported values', () => {
    expect(toAppLang('uk')).toBe('uk');
    expect(toAppLang('de')).toBe(DEFAULT_LANG);
    expect(toAppLang(undefined)).toBe(DEFAULT_LANG);
  });
});
