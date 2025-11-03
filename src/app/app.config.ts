import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco, translocoConfig } from '@ngneat/transloco';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTransloco({
      config: translocoConfig({
        availableLangs: ['en', 'uk'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: true
      })
    })
  ]
};
