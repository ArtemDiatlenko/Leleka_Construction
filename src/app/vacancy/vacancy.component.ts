import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Vacancy, VacancyStorage } from '../storage/vacancy-storage';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit, OnDestroy {
  vacancy: Vacancy | null = null;
  otherVacancies: Vacancy[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private vacancyStorage: VacancyStorage
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        const vacancyPath = params.get('path');

        if (!vacancyPath) {
          this.vacancy = null;
          this.otherVacancies = this.vacancyStorage.getAllVacancies().slice(0, 3);
          return;
        }

        this.vacancy = this.vacancyStorage.getVacancyByPath(vacancyPath) ?? null;
        this.otherVacancies = this.vacancyStorage.getVacanciesExcluding(vacancyPath).slice(0, 3);
        this.scrollTop();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
