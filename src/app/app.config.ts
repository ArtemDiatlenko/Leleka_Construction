import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideTransloco, translocoConfig } from '@ngneat/transloco';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
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
        availableLangs: ['pl', 'uk', 'en'],
        defaultLang: 'pl',
        reRenderOnLangChange: true,
        prodMode: true
      })
    })
  ]
};
