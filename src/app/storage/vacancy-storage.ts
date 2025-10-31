export class VacancyStorage {
  private vacancies = [
    {
      id: 1,
      title: "Cieśla Szalunkowy",
      path: "ciesla-szalunkowy",
      header: "Cieśla Szalunkowy",
      description: "Poszukujemy doświadczonych cieśli szalunkowych do realizacji konstrukcji żelbetowych. Praca przy montażu i demontażu systemów szalunkowych PERI, DOKA, ULMA. Wymagana znajomość rysunku technicznego i umiejętność pracy w zespole."
    },
    {
      id: 2,
      title: "Zbrojarz",
      path: "zbrojarz",
      header: "Zbrojarz Konstrukcji Żelbetowych",
      description: "Zatrudnimy zbrojarzy do prac przy zbrojeniu fundamentów, słupów, ścian i stropów. Wymagana umiejętność wiązania zbrojenia zgodnie z dokumentacją techniczną oraz doświadczenie w pracy na dużych budowach."
    },
    {
      id: 3,
      title: "Kierownik Robót Żelbetowych",
      path: "kierownik-robot-zelbetowych",
      header: "Kierownik Robót Żelbetowych",
      description: "Poszukujemy kierownika robót żelbetowych z doświadczeniem w prowadzeniu zespołów i nadzorze nad realizacją prac konstrukcyjnych. Wymagana znajomość procesów budowlanych, umiejętność czytania dokumentacji projektowej i planowania robót."
    },
    {
      id: 4,
      title: "Pracownik Ogólnobudowlany",
      path: "pracownik-ogolnobudowlany",
      header: "Pracownik Ogólnobudowlany",
      description: "Zatrudnimy pracowników ogólnobudowlanych do prac pomocniczych przy realizacji konstrukcji żelbetowych. Mile widziane doświadczenie na budowie, chęć do pracy i zaangażowanie. Zapewniamy narzędzia, szkolenie oraz zakwaterowanie."
    }
  ];

  getAllVacancies() {
    return this.vacancies;
  }

  getVacancyByPath(path: string) {
    return this.vacancies.find(vacancy => vacancy.path === path);
  }

  getVacancyById(id: number) {
    return this.vacancies.find(vacancy => vacancy.id === id);
  }

  getVacanciesExcluding(predicate: (vacancy: any) => boolean) {
    return this.vacancies.filter(vacancy => !predicate(vacancy));
  }
}
