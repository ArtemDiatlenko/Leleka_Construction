import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { StatsBannerComponent, StatItem } from '../shared/stats-banner/stats-banner.component';
import { AppLang, toAppLang } from '../core/i18n/app-language';
import { Vacancy } from '../core/models/vacancy.model';
import { VacancyService } from '../core/services/vacancy.service';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule, RouterModule, StatsBannerComponent, TranslocoDirective],
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancyStats: StatItem[] = [];
  vacancies: Vacancy[] = [];

  private readonly destroyRef = inject(DestroyRef);

  trackVacancyByPath = (_: number, vacancy: Vacancy) => vacancy.path;

  constructor(
    private vacanciesService: VacancyService,
    private transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    this.refreshContent();

    this.transloco.langChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refreshContent());
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private refreshContent(): void {
    const lang = this.getCurrentLang();

    this.vacancies = this.vacanciesService.getAll(lang);
    this.vacancyStats = [
      { value: '7', title: this.transloco.translate('stats.marketYears') },
      { value: '20+', title: this.transloco.translate('stats.businessPartners') },
      { value: '60', title: this.transloco.translate('stats.completedProjects') },
      { value: '100+', title: this.transloco.translate('stats.teamSize') }
    ];
  }

  private getCurrentLang(): AppLang {
    return toAppLang(this.transloco.getActiveLang());
  }
}
