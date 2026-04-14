import { Injectable } from '@angular/core';

export type Vacancy = {
  id: number;
  title: string;
  path: string;
  summary: string;
  location: string;
  employmentType: string;
  image: string;
  highlights: string[];
  offers: string[];
  responsibilities: string[];
  requirements: string[];
};

@Injectable({ providedIn: 'root' })
export class VacancyStorage {
  private readonly vacancies: Vacancy[] = [
    {
      id: 1,
      title: 'Kierownik Robót Żelbetowych',
      path: 'kierownik-robot-zelbetowych',
      summary: 'Rola dla osoby, która potrafi prowadzić brygady żelbetowe, koordynować roboty i trzymać porządek realizacyjny na budowie.',
      location: 'Wrocław',
      employmentType: 'Pełny etat / stała współpraca',
      image: 'assets/video/photos/podstrona-img.jpg',
      highlights: ['Wysokie wynagrodzenie', 'Zakwaterowanie', 'Duże realizacje'],
      offers: [
        'Wysokie wynagrodzenie ustalane indywidualnie',
        'Stabilna ilość pracy przy dużych zleceniach',
        'Dobrze zorganizowaną ekipę i jasny podział odpowiedzialności',
        'Zapewnione zakwaterowanie',
        'Legalne zatrudnienie w oparciu o umowę',
        'Pracę przy inwestycjach prowadzonych we Wrocławiu'
      ],
      responsibilities: [
        'Nadzorowanie i koordynacja robót budowlanych',
        'Kontrola przebiegu prac zgodnie z projektem i harmonogramem',
        'Rozwiązywanie bieżących problemów technicznych na budowie',
        'Współpraca z inwestorem, podwykonawcami i generalnym wykonawcą',
        'Kontrola przestrzegania przepisów BHP i ppoż.',
        'Czytanie dokumentacji technicznej i organizacja pracy zespołu',
        'Zamawianie materiałów oraz koordynacja dostaw',
        'Bezpośredni nadzór nad jakością prowadzonych robót'
      ],
      requirements: [
        'Doświadczenie w prowadzeniu prac żelbetowych',
        'Umiejętność zarządzania ludźmi i delegowania zadań',
        'Odpowiedzialność, dyscyplina i terminowość',
        'Komunikatywna znajomość języka polskiego',
        'Samodzielność w podejmowaniu decyzji i rozwiązywaniu problemów',
        'Znajomość dokumentacji projektowej',
        'Zaangażowanie i gotowość do pracy zespołowej'
      ]
    },
    {
      id: 2,
      title: 'Cieśla-Szalunkowy',
      path: 'ciesla-szalunkowy',
      summary: 'Szukamy doświadczonego cieśli-szalunkowego do pracy przy konstrukcjach monolitycznych i robotach żelbetowych.',
      location: 'Wrocław',
      employmentType: 'Pełny etat / stała współpraca',
      image: 'assets/video/photos/karier.jpg',
      highlights: ['Stała praca', 'Legalne zatrudnienie', 'Zakwaterowanie'],
      offers: [
        'Atrakcyjne wynagrodzenie zależne od doświadczenia',
        'Stałą pracę przy dużych zleceniach',
        'Zapewnione zakwaterowanie',
        'Legalne zatrudnienie w oparciu o umowę',
        'Pracę przy realizacjach we Wrocławiu'
      ],
      responsibilities: [
        'Montaż i demontaż szalunków',
        'Prace ciesielskie przy konstrukcjach żelbetowych',
        'Wsparcie przy betonowaniu i pielęgnacji betonu',
        'Przestrzeganie zasad BHP i kontrola jakości wykonania',
        'Współpraca z brygadzistą i zespołem wykonawczym'
      ],
      requirements: [
        'Doświadczenie w pracach ciesielskich i szalunkowych',
        'Dokładność, odpowiedzialność i terminowość',
        'Komunikatywny język polski lub gotowość do nauki',
        'Umiejętność pracy w zespole'
      ]
    },
    {
      id: 3,
      title: 'Zbrojarz',
      path: 'zbrojarz',
      summary: 'Oferta dla zbrojarzy, którzy chcą pracować w stabilnym zespole przy dużych projektach żelbetowych.',
      location: 'Wrocław',
      employmentType: 'Pełny etat / stała współpraca',
      image: 'assets/video/photos/123.png',
      highlights: ['Duże zlecenia', 'Stała współpraca', 'Wsparcie na miejscu'],
      offers: [
        'Wysokie wynagrodzenie ustalane indywidualnie',
        'Stałą pracę przy dużych realizacjach',
        'Zapewnione zakwaterowanie',
        'Legalne zatrudnienie w oparciu o umowę',
        'Pracę przy budowach we Wrocławiu'
      ],
      responsibilities: [
        'Przygotowanie i cięcie stali zbrojeniowej',
        'Wiązanie i montaż zbrojenia w deskowaniach i formach',
        'Kontrola jakości zbrojenia przed betonowaniem',
        'Przestrzeganie zasad BHP i utrzymanie porządku na stanowisku',
        'Współpraca z brygadzistą i zespołem'
      ],
      requirements: [
        'Doświadczenie w pracach zbrojarskich',
        'Dokładność i odpowiedzialność',
        'Umiejętność pracy w zespole',
        'Gotowość do pracy w stabilnym tempie przy dużych inwestycjach'
      ]
    },
    {
      id: 4,
      title: 'Pracownik Ogólnobudowlany',
      path: 'pracownik-ogolnobudowlany',
      summary: 'Rola dla osób z doświadczeniem budowlanym, które chcą wejść do stabilnego zespołu robót żelbetowych i monolitycznych.',
      location: 'Wrocław i okolice',
      employmentType: 'Pełny etat / elastyczna współpraca',
      image: 'assets/video/photos/about-photo.png',
      highlights: ['Pomoc w legalizacji', 'Darmowe zakwaterowanie', 'Stałe zlecenia'],
      offers: [
        'Legalne zatrudnienie na podstawie umowy',
        'Pomoc w legalizacji pobytu i pracy',
        'Darmowe zakwaterowanie',
        'Stałe zlecenia i stabilny grafik',
        'Pracę we Wrocławiu i okolicach',
        'Wynagrodzenie dopasowane do doświadczenia'
      ],
      responsibilities: [
        'Montaż i rozbiórka szalunków',
        'Pomoc przy zbrojeniu i betonowaniu',
        'Prace ciesielskie i ogólnobudowlane',
        'Utrzymanie porządku na budowie',
        'Współpraca z brygadzistą i zespołem'
      ],
      requirements: [
        'Doświadczenie w pracach budowlanych',
        'Umiejętność pracy w zespole',
        'Gotowość do pracy również w innych miastach, gdy wymaga tego projekt',
        'Zaangażowanie i odpowiedzialne podejście do obowiązków'
      ]
    }
  ];

  getAllVacancies(): Vacancy[] {
    return this.vacancies.map(vacancy => ({ ...vacancy, highlights: [...vacancy.highlights], offers: [...vacancy.offers], responsibilities: [...vacancy.responsibilities], requirements: [...vacancy.requirements] }));
  }

  getVacancyByPath(path: string): Vacancy | undefined {
    const vacancy = this.vacancies.find(item => item.path === path);
    return vacancy
      ? {
          ...vacancy,
          highlights: [...vacancy.highlights],
          offers: [...vacancy.offers],
          responsibilities: [...vacancy.responsibilities],
          requirements: [...vacancy.requirements]
        }
      : undefined;
  }

  getVacanciesExcluding(path: string): Vacancy[] {
    return this.vacancies
      .filter(vacancy => vacancy.path !== path)
      .map(vacancy => ({ ...vacancy, highlights: [...vacancy.highlights], offers: [...vacancy.offers], responsibilities: [...vacancy.responsibilities], requirements: [...vacancy.requirements] }));
  }
}
