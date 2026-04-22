import { TranslocoService } from '@ngneat/transloco';

import { VacancyService } from './vacancy.service';

describe('VacancyService', () => {
  it('localizes vacancies for the requested language', () => {
    const service = createService('pl');

    const vacancy = service.getByPath('zbrojarz', 'en');

    expect(vacancy?.title).toBe('Steel Fixer');
    expect(vacancy?.location).toBe('Wroclaw');
    expect(vacancy?.highlights).toEqual(['Large contracts', 'Steady cooperation', 'On-site support']);
  });

  it('uses the active language when no language is passed', () => {
    const service = createService('uk');

    const vacancy = service.getByPath('ciesla-szalunkowy');

    expect(vacancy?.title).toBe('Тесля-опалубник');
  });

  it('falls back to Polish for unsupported active languages', () => {
    const service = createService('de');

    const vacancy = service.getByPath('zbrojarz');

    expect(vacancy?.title).toBe('Zbrojarz');
  });

  it('returns related vacancies without the current vacancy', () => {
    const service = createService('en');

    const relatedVacancies = service.getRelated('zbrojarz', 'en', 2);

    expect(relatedVacancies).toHaveSize(2);
    expect(relatedVacancies.some(vacancy => vacancy.path === 'zbrojarz')).toBeFalse();
  });

  it('returns defensive copies of localized arrays', () => {
    const service = createService('en');
    const vacancy = service.getByPath('zbrojarz', 'en');

    vacancy?.highlights.push('Changed in test');

    expect(service.getByPath('zbrojarz', 'en')?.highlights).not.toContain('Changed in test');
  });

  function createService(activeLang: string): VacancyService {
    return new VacancyService({
      getActiveLang: () => activeLang
    } as TranslocoService);
  }
});
