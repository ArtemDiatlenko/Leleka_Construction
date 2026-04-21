import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideTransloco, translocoConfig } from '@ngneat/transloco';
import { routes } from './app.routes';
import { APP_LANGS, DEFAULT_LANG } from './core/i18n/app-language';
import { TranslocoHttpLoader } from '../transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withViewTransitions()
    ),
    provideTransloco({
      config: translocoConfig({
        availableLangs: [...APP_LANGS],
        defaultLang: DEFAULT_LANG,
        fallbackLang: DEFAULT_LANG,
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      }),
      loader: TranslocoHttpLoader
    })
  ]
};
