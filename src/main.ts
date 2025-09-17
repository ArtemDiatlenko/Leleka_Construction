import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { VacancyStorage } from './app/storage/vacancy-storage';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    VacancyStorage // ← Зарегистрируйте сервис здесь
  ]
});
