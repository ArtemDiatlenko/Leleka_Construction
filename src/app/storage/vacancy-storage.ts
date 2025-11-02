export class VacancyStorage {
  private vacancies = [
        {
      id: 1,
      title: "Kierownik Robót Żelbetowych",
      path: "kierownik-robot-zelbetowych",
      header: "Kierownik Robót Żelbetowych",
      description: `
      <p>Szukamy kogoś, kto zna się na monolicie i potrafi poprowadzić ekipę do prac żelbetowych.</p>

      <h3>Oferujemy:</h3>
      <ul>
        <li>Wysokie wynagrodzenie (ustalane indywidualnie)</li>
        <li>Stabilna ilość pracy – duże zlecenia</li>
        <li>Przyjazna, dobrze zorganizowana ekipa</li>
        <li>Zakwaterowanie zapewnione</li>
        <li>Legalne zatrudnienie (umowa)</li>
        <li>Praca we Wrocławiu</li>
      </ul>

      <h3>Obowiązki:</h3>
      <ul>
        <li>Nadzorowanie i koordynacja robót budowlanych</li>
        <li>Kontrola przebiegu prac zgodnie z projektem i terminami</li>
        <li>Rozwiązywanie bieżących problemów technicznych</li>
        <li>Współpraca z podwykonawcą, inwestorem i Głównym Wykonawcą</li>
        <li>Kontrola przestrzegania przepisów BHP i ppoż</li>
        <li>Czytanie projektów technicznych</li>
        <li>Organizacja pracy na budowie</li>
        <li>Zamawianie materiałów i koordynacja dostaw</li>
        <li>Bezpośrednie nadzorowanie jakości realizowanych robót</li>
      </ul>

      <h3>Wymagania:</h3>
      <ul>
        <li>Doświadczenie w prowadzeniu prac żelbetowych – obowiązkowo</li>
        <li>Umiejętność zarządzania ludźmi i podziału zadań</li>
        <li>Odpowiedzialność, dyscyplina, terminowość</li>
        <li>Komunikatywna znajomość języka polskiego</li>
        <li>Umiejętność rozwiązywania problemów i podejmowania decyzji</li>
        <li>Umiejętność pracy z ludźmi i komunikatywność</li>
        <li>Znajomość dokumentacji projektowej i kierowania pracami na jej podstawie</li>
        <li>Zaangażowanie i odpowiedzialność</li>
        <li>Umiejętność pracy w zespole</li>
        <li>Tylko z doświadczeniem.</li>
      </ul>
      `
    },
    {
      id: 2,
      title: "Cieśla-szalunkowy",
      path: "ciesla-szalunkowy",
      header: "Cieśla-szalunkowy",
      description: `
      <h3>Oferujemy:</h3>
      <ul>
        <li>Wysokie wynagrodzenie (ustalane indywidualnie)</li>
        <li>Stała praca – duże zlecenia</li>
        <li>Zakwaterowanie zapewnione</li>
        <li>Legalne zatrudnienie (umowa)</li>
        <li>Praca we Wrocławiu</li>
      </ul>

      <h3>Obowiązki:</h3>
      <ul>
        <li>Montaż i demontaż szalunków</li>
        <li>Prace ciesielskie przy konstrukcjach żelbetowych</li>
        <li>Wylewanie i pielęgnacja betonu</li>
        <li>Przestrzeganie zasad BHP i kontrola jakości</li>
        <li>Współpraca z brygadzistą i zespołem</li>
      </ul>

      <h3>Wymagania:</h3>
      <ul>
        <li>Doświadczenie w pracach ciesielskich i szalunkowych (obowiązkowe)</li>
        <li>Odpowiedzialność, dokładność, terminowość</li>
        <li>Komunikatywny język polski lub chęć nauki</li>
        <li>Umiejętność pracy w zespole</li>
      </ul>
      `
    },
    {
      id: 3,
      title: "Zbrojarz",
      path: "zbrojarz",
      header: "Zbrojarz",
      description: `
      <h3>Oferujemy:</h3>
      <ul>
        <li>Wysokie wynagrodzenie (ustalane indywidualnie)</li>
        <li>Stała praca – duże zlecenia</li>
        <li>Zakwaterowanie zapewnione</li>
        <li>Legalne zatrudnienie (umowa)</li>
        <li>Praca we Wrocławiu</li>
      </ul>

      <h3>Obowiązki:</h3>
      <ul>
        <li>Przygotowanie i cięcie stali zbrojeniowej</li>
        <li>Wiązanie i montaż zbrojenia w formach i deskowaniach</li>
        <li>Kontrola jakości zbrojenia przed betonowaniem</li>
        <li>Przestrzeganie zasad BHP i utrzymanie porządku</li>
        <li>Współpraca z brygadzistą i zespołem</li>
      </ul>

      <h3>Wymagania:</h3>
      <ul>
        <li>Doświadczenie w pracach zbrojarskich</li>
        <li>Odpowiedzialność, dokładność, terminowość</li>
        <li>Umiejętność pracy w zespole</li>
      </ul>
      `
    },
    {
      id: 4,
      title: "Pracownik ogólnobudowlany",
      path: "pracownik-ogólnobudowlany",
      header: "Pracownik ogólnobudowlany",
      description: `
      <h3>Oferujemy:</h3>
      <ul>
        <li>Legalne zatrudnienie (umowa)</li>
        <li>Pomoc w legalizacji pobytu i pracy</li>
        <li>Darmowe zakwaterowanie</li>
        <li>Stałe zlecenia</li>
        <li>Praca we Wrocławiu i okolicach</li>
        <li>Wynagrodzenie zależne od doświadczenia</li>
      </ul>

      <h3>Obowiązki:</h3>
      <ul>
        <li>Montaż i rozbiórka szalunków</li>
        <li>Pomoc przy zbrojeniu i betonowaniu</li>
        <li>Prace ciesielskie i ogólnobudowlane</li>
        <li>Utrzymanie porządku na budowie</li>
        <li>Współpraca z brygadzistą i zespołem</li>
      </ul>

      <h3>Wymagania:</h3>
      <ul>
        <li>Doświadczenie w pracach budowlanych</li>
        <li>Umiejętność pracy w zespole</li>
        <li>Gotowość do pracy także w innych miastach, jeśli zajdzie potrzeba</li>
      </ul>
      `
    },
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
