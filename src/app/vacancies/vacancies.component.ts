import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatsBannerComponent } from '../shared/stats-banner/stats-banner.component';
import { VacancyStorage } from '../storage/vacancy-storage';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule, RouterModule, StatsBannerComponent],
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  statsItems = [
    { value: '7',    title: 'Lat działamy na rynku' },
    { value: '20+', title: 'Partnerów Biznesowych' },
    { value: '60', title: 'Zrealizowanych projektów' },
    { value: '100+',   title: 'Zespół specjalistów' }
  ];

  vacancies: any[] = [];

  trackByPath = (_: number, v: any) => v?.path || v?.title;

  constructor(private vacancyStorage: VacancyStorage) {}

  ngOnInit(): void {
    this.vacancies = this.vacancyStorage.getAllVacancies();
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
