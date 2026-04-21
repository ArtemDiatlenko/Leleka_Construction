import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { VACANCIES } from '../data/vacancies.data';
import { AppLang, toAppLang } from '../i18n/app-language';
import { Vacancy, VacancySource } from '../models/vacancy.model';

@Injectable({ providedIn: 'root' })
export class VacancyService {
  constructor(private transloco: TranslocoService) {}

  getAll(lang: AppLang = this.currentLang()): Vacancy[] {
    return VACANCIES.map(vacancy => this.localizeVacancy(vacancy, lang));
  }

  getByPath(path: string, lang: AppLang = this.currentLang()): Vacancy | undefined {
    const vacancy = VACANCIES.find(item => item.path === path);
    return vacancy ? this.localizeVacancy(vacancy, lang) : undefined;
  }

  getRelated(path: string, lang: AppLang = this.currentLang(), limit = 3): Vacancy[] {
    return VACANCIES
      .filter(vacancy => vacancy.path !== path)
      .slice(0, limit)
      .map(vacancy => this.localizeVacancy(vacancy, lang));
  }

  private localizeVacancy(vacancy: VacancySource, lang: AppLang): Vacancy {
    return {
      id: vacancy.id,
      path: vacancy.path,
      image: vacancy.image,
      title: vacancy.title[lang],
      summary: vacancy.summary[lang],
      location: vacancy.location[lang],
      employmentType: vacancy.employmentType[lang],
      highlights: [...vacancy.highlights[lang]],
      offers: [...vacancy.offers[lang]],
      responsibilities: [...vacancy.responsibilities[lang]],
      requirements: [...vacancy.requirements[lang]]
    };
  }

  private currentLang(): AppLang {
    return toAppLang(this.transloco.getActiveLang());
  }
}
