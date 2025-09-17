import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VacancyStorage } from '../storage/vacancy-storage'; // Импортируйте ваш класс

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit {

  vacancy: any = null;

  constructor(
    private route: ActivatedRoute,
    private vacancyStorage: VacancyStorage
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const vacancyPath = params['path'];
      this.vacancy = this.vacancyStorage.getVacancyByPath(vacancyPath);

      if (!this.vacancy) {
        console.log('Vacancy not found');
        // Здесь можно добавить редирект на страницу 404
      }
    });
  }
}
