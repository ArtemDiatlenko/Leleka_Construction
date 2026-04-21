import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyComponent } from './vacancy/vacancy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vacancies/:path',
    component: VacancyComponent
  },
  {
    path: 'vacancies',
    component: VacanciesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
