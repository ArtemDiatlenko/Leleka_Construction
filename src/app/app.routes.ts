import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {VacancyComponent} from './vacancy/vacancy.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

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
];
