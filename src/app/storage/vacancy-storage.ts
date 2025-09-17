export class VacancyStorage {
  private vacancies = [
    {
      id: 1,
      title: "Brygadzista Budowlany",
      path: "brygadzista-budowlany",
      header: "Brygadzista na placach budowy",
      description: "Poszukujemy doświadczonego brygadzisty do kierowania zespołami budowlanymi. Obowiązki: kontrola jakości prac, tworzenie harmonogramów, prowadzenie dokumentacji, zamawianie materiałów. Wymagane min. 3 lata doświadczenia."
    },
    {
      id: 2,
      title: "Murarz",
      path: "murarz",
      header: "Wykwalifikowany Murarz",
      description: "Poszukujemy murarzy do pracy na obiektach budownictwa mieszkaniowego. Wymagane doświadczenie w murowaniu cegieł, bloczków i kamienia naturalnego. Zapewniamy narzędzia i odzież roboczą."
    },
    {
      id: 3,
      title: "Dekarz",
      path: "dekarz",
      header: "Specjalista od Montażu Dachów",
      description: "Poszukujemy dekarza do pracy z pokryciami miękkimi, blachodachówką i dachówką ceramiczną. Znajomość technologii montażu, min. 2 lata doświadczenia. Możliwość szkoleń."
    },
    {
      id: 4,
      title: "Spawacz",
      path: "spawacz",
      header: "Spawacz na place budowy",
      description: "Potrzebny spawacz z doświadczeniem na placach budowy. Wymagana umiejętność pracy z różnymi rodzajami metali oraz znajomość BHP. Uprawnienia spawalnicze wymagane."
    },
    {
      id: 5,
      title: "Specjalista Od Wykończenia Wnętrz",
      path: "specjalista-od-wykonczenia-wnetrz",
      header: "Monter Zabudowy i Robót Wykończeniowych",
      description: "Poszukujemy specjalisty od robót wykończeniowych wnętrz. Tynkowanie, malowanie, układanie płytek, montaż płyt g-k. Wymagana dokładność i dbałość o szczegóły."
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
