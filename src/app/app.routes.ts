import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {VacancyComponent} from './vacancy/vacancy.component';

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
  }
];
