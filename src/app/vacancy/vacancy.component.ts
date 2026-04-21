import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { AppLang, toAppLang } from '../core/i18n/app-language';
import { Vacancy } from '../core/models/vacancy.model';
import { VacancyService } from '../core/services/vacancy.service';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoDirective],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancy: Vacancy | null = null;
  otherVacancies: Vacancy[] = [];

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private vacanciesService: VacancyService,
    private transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap.pipe(map((params: ParamMap) => params.get('path'))),
      this.transloco.langChanges$.pipe(startWith(this.transloco.getActiveLang()))
    ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([vacancyPath]) => {
        const lang = this.getCurrentLang();

        if (!vacancyPath) {
          this.vacancy = null;
          this.otherVacancies = this.vacanciesService.getAll(lang).slice(0, 3);
          return;
        }

        this.vacancy = this.vacanciesService.getByPath(vacancyPath, lang) ?? null;
        this.otherVacancies = this.vacanciesService.getRelated(vacancyPath, lang);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private getCurrentLang(): AppLang {
    return toAppLang(this.transloco.getActiveLang());
  }
}
