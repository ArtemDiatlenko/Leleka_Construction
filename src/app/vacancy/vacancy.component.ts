import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VacancyStorage } from '../storage/vacancy-storage';

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit {

  vacancy: any = null;
  otherVacancies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router, // ← Добавлен Router для навигации
    private vacancyStorage: VacancyStorage
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const vacancyPath = params['path'];
      this.vacancy = this.vacancyStorage.getVacancyByPath(vacancyPath);
      this.otherVacancies = this.vacancyStorage.getVacanciesExcluding(v => v.path === vacancyPath);

      if (!this.vacancy) {
        console.log('Vacancy not found, redirecting to home');
        this.router.navigate(['/']); // Редирект на домашнюю страницу
      }
    });
  }

  selectVacancy(selected: any) {
    this.router.navigate(['/vacancy', selected.path]);
    this.otherVacancies = this.otherVacancies.filter(v => v.path !== selected.path);
  }
}
