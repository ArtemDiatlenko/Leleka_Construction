import { VacancySource } from '../models/vacancy.model';

export const VACANCIES: VacancySource[] = [
    {
      id: 1,
      path: 'kierownik-robot-zelbetowych',
      image: 'assets/video/photos/podstrona-img.jpg',
      title: {
        pl: 'Kierownik Robót Żelbetowych',
        uk: 'Керівник залізобетонних робіт',
        en: 'Reinforced Concrete Works Manager'
      },
      summary: {
        pl: 'Rola dla osoby, która potrafi prowadzić brygady żelbetowe, koordynować roboty i trzymać porządek realizacyjny na budowie.',
        uk: 'Роль для людини, яка вміє керувати залізобетонними бригадами, координувати роботи та тримати будову в порядку.',
        en: 'A role for someone who can lead reinforced concrete crews, coordinate execution and keep the site under control.'
      },
      location: {
        pl: 'Wrocław',
        uk: 'Вроцлав',
        en: 'Wroclaw'
      },
      employmentType: {
        pl: 'Pełny etat / stała współpraca',
        uk: 'Повна зайнятість / постійна співпраця',
        en: 'Full-time / long-term cooperation'
      },
      highlights: {
        pl: ['Wysokie wynagrodzenie', 'Zakwaterowanie', 'Duże realizacje'],
        uk: ['Висока оплата', 'Проживання', 'Великі об’єкти'],
        en: ['High salary', 'Accommodation', 'Large-scale projects']
      },
      offers: {
        pl: [
          'Wysokie wynagrodzenie ustalane indywidualnie',
          'Stabilna ilość pracy przy dużych zleceniach',
          'Dobrze zorganizowaną ekipę i jasny podział odpowiedzialności',
          'Zapewnione zakwaterowanie',
          'Legalne zatrudnienie w oparciu o umowę',
          'Pracę przy inwestycjach prowadzonych we Wrocławiu'
        ],
        uk: [
          'Висока зарплата, узгоджувана індивідуально',
          'Стабільний обсяг роботи на великих об’єктах',
          'Добре організована команда та чіткий розподіл відповідальності',
          'Надане проживання',
          'Офіційне працевлаштування за договором',
          'Робота на об’єктах у Вроцлаві'
        ],
        en: [
          'High salary negotiated individually',
          'Stable workload on large projects',
          'Well-organized team and clear responsibilities',
          'Accommodation provided',
          'Legal employment based on contract',
          'Work on projects delivered in Wroclaw'
        ]
      },
      responsibilities: {
        pl: [
          'Nadzorowanie i koordynacja robót budowlanych',
          'Kontrola przebiegu prac zgodnie z projektem i harmonogramem',
          'Rozwiązywanie bieżących problemów technicznych na budowie',
          'Współpraca z inwestorem, podwykonawcami i generalnym wykonawcą',
          'Kontrola przestrzegania przepisów BHP i ppoż.',
          'Czytanie dokumentacji technicznej i organizacja pracy zespołu',
          'Zamawianie materiałów oraz koordynacja dostaw',
          'Bezpośredni nadzór nad jakością prowadzonych robót'
        ],
        uk: [
          'Нагляд і координація будівельних робіт',
          'Контроль ходу робіт відповідно до проєкту та графіка',
          'Вирішення поточних технічних питань на будові',
          'Співпраця з інвестором, субпідрядниками та генпідрядником',
          'Контроль дотримання правил техніки безпеки',
          'Читання технічної документації та організація роботи команди',
          'Замовлення матеріалів і координація поставок',
          'Безпосередній контроль якості виконуваних робіт'
        ],
        en: [
          'Supervise and coordinate construction works',
          'Control progress according to design and schedule',
          'Solve current technical issues on site',
          'Cooperate with investor, subcontractors and general contractor',
          'Ensure HSE compliance',
          'Read technical documentation and organize team work',
          'Order materials and coordinate deliveries',
          'Directly oversee execution quality'
        ]
      },
      requirements: {
        pl: [
          'Doświadczenie w prowadzeniu prac żelbetowych',
          'Umiejętność zarządzania ludźmi i delegowania zadań',
          'Odpowiedzialność, dyscyplina i terminowość',
          'Komunikatywna znajomość języka polskiego',
          'Samodzielność w podejmowaniu decyzji i rozwiązywaniu problemów',
          'Znajomość dokumentacji projektowej',
          'Zaangażowanie i gotowość do pracy zespołowej'
        ],
        uk: [
          'Досвід керування залізобетонними роботами',
          'Уміння керувати людьми та делегувати завдання',
          'Відповідальність, дисципліна та пунктуальність',
          'Комунікативне знання польської мови',
          'Самостійність у прийнятті рішень та вирішенні проблем',
          'Знання проєктної документації',
          'Залученість і готовність до командної роботи'
        ],
        en: [
          'Experience in reinforced concrete execution management',
          'Ability to lead people and delegate tasks',
          'Responsibility, discipline and punctuality',
          'Communicative Polish language skills',
          'Independent decision-making and problem-solving',
          'Understanding of design documentation',
          'Commitment and readiness for teamwork'
        ]
      }
    },
    {
      id: 2,
      path: 'ciesla-szalunkowy',
      image: 'assets/video/photos/karier.jpg',
      title: {
        pl: 'Cieśla-Szalunkowy',
        uk: 'Тесля-опалубник',
        en: 'Formwork Carpenter'
      },
      summary: {
        pl: 'Szukamy doświadczonego cieśli-szalunkowego do pracy przy konstrukcjach monolitycznych i robotach żelbetowych.',
        uk: 'Шукаємо досвідченого теслю-опалубника для роботи на монолітних і залізобетонних конструкціях.',
        en: 'We are looking for an experienced formwork carpenter for monolithic and reinforced concrete works.'
      },
      location: {
        pl: 'Wrocław',
        uk: 'Вроцлав',
        en: 'Wroclaw'
      },
      employmentType: {
        pl: 'Pełny etat / stała współpraca',
        uk: 'Повна зайнятість / постійна співпраця',
        en: 'Full-time / long-term cooperation'
      },
      highlights: {
        pl: ['Stała praca', 'Legalne zatrudnienie', 'Zakwaterowanie'],
        uk: ['Стабільна робота', 'Офіційне працевлаштування', 'Проживання'],
        en: ['Stable work', 'Legal employment', 'Accommodation']
      },
      offers: {
        pl: [
          'Atrakcyjne wynagrodzenie zależne od doświadczenia',
          'Stałą pracę przy dużych zleceniach',
          'Zapewnione zakwaterowanie',
          'Legalne zatrudnienie w oparciu o umowę',
          'Pracę przy realizacjach we Wrocławiu'
        ],
        uk: [
          'Приваблива оплата залежно від досвіду',
          'Постійна робота на великих об’єктах',
          'Надане проживання',
          'Офіційне працевлаштування за договором',
          'Робота на об’єктах у Вроцлаві'
        ],
        en: [
          'Competitive salary based on experience',
          'Steady work on large contracts',
          'Accommodation provided',
          'Legal employment based on contract',
          'Work on projects in Wroclaw'
        ]
      },
      responsibilities: {
        pl: [
          'Montaż i demontaż szalunków',
          'Prace ciesielskie przy konstrukcjach żelbetowych',
          'Wsparcie przy betonowaniu i pielęgnacji betonu',
          'Przestrzeganie zasad BHP i kontrola jakości wykonania',
          'Współpraca z brygadzistą i zespołem wykonawczym'
        ],
        uk: [
          'Монтаж і демонтаж опалубки',
          'Теслярські роботи на залізобетонних конструкціях',
          'Підтримка під час бетонування та догляду за бетоном',
          'Дотримання правил безпеки та контроль якості',
          'Співпраця з бригадиром і командою'
        ],
        en: [
          'Assemble and dismantle formwork',
          'Carpentry works for reinforced concrete structures',
          'Support concreting and curing processes',
          'Follow safety rules and quality standards',
          'Cooperate with foreman and execution team'
        ]
      },
      requirements: {
        pl: [
          'Doświadczenie w pracach ciesielskich i szalunkowych',
          'Dokładność, odpowiedzialność i terminowość',
          'Komunikatywny język polski lub gotowość do nauki',
          'Umiejętność pracy w zespole'
        ],
        uk: [
          'Досвід у теслярських та опалубних роботах',
          'Точність, відповідальність і пунктуальність',
          'Комунікативна польська або готовність вивчати',
          'Уміння працювати в команді'
        ],
        en: [
          'Experience in carpentry and formwork works',
          'Accuracy, responsibility and punctuality',
          'Communicative Polish or willingness to learn',
          'Ability to work in a team'
        ]
      }
    },
    {
      id: 3,
      path: 'zbrojarz',
      image: 'assets/video/photos/123.png',
      title: {
        pl: 'Zbrojarz',
        uk: 'Арматурник',
        en: 'Steel Fixer'
      },
      summary: {
        pl: 'Oferta dla zbrojarzy, którzy chcą pracować w stabilnym zespole przy dużych projektach żelbetowych.',
        uk: 'Пропозиція для арматурників, які хочуть працювати у стабільній команді на великих залізобетонних проєктах.',
        en: 'A role for steel fixers who want steady work in a stable team on large reinforced concrete projects.'
      },
      location: {
        pl: 'Wrocław',
        uk: 'Вроцлав',
        en: 'Wroclaw'
      },
      employmentType: {
        pl: 'Pełny etat / stała współpraca',
        uk: 'Повна зайнятість / постійна співпраця',
        en: 'Full-time / long-term cooperation'
      },
      highlights: {
        pl: ['Duże zlecenia', 'Stała współpraca', 'Wsparcie na miejscu'],
        uk: ['Великі об’єкти', 'Постійна співпраця', 'Підтримка на місці'],
        en: ['Large contracts', 'Steady cooperation', 'On-site support']
      },
      offers: {
        pl: [
          'Wysokie wynagrodzenie ustalane indywidualnie',
          'Stałą pracę przy dużych realizacjach',
          'Zapewnione zakwaterowanie',
          'Legalne zatrudnienie w oparciu o umowę',
          'Pracę przy budowach we Wrocławiu'
        ],
        uk: [
          'Висока оплата, узгоджувана індивідуально',
          'Постійна робота на великих проєктах',
          'Надане проживання',
          'Офіційне працевлаштування за договором',
          'Робота на будовах у Вроцлаві'
        ],
        en: [
          'High salary negotiated individually',
          'Steady work on major projects',
          'Accommodation provided',
          'Legal employment based on contract',
          'Work on construction sites in Wroclaw'
        ]
      },
      responsibilities: {
        pl: [
          'Przygotowanie i cięcie stali zbrojeniowej',
          'Wiązanie i montaż zbrojenia w deskowaniach i formach',
          'Kontrola jakości zbrojenia przed betonowaniem',
          'Przestrzeganie zasad BHP i utrzymanie porządku na stanowisku',
          'Współpraca z brygadzistą i zespołem'
        ],
        uk: [
          'Підготовка та різання арматурної сталі',
          'В’язання і монтаж арматури в опалубці та формах',
          'Контроль якості арматури перед бетонуванням',
          'Дотримання техніки безпеки та порядку на робочому місці',
          'Співпраця з бригадиром і командою'
        ],
        en: [
          'Prepare and cut reinforcement steel',
          'Tie and assemble reinforcement in formwork',
          'Check reinforcement quality before concreting',
          'Follow safety rules and keep workplace clean',
          'Cooperate with foreman and team'
        ]
      },
      requirements: {
        pl: [
          'Doświadczenie w pracach zbrojarskich',
          'Dokładność i odpowiedzialność',
          'Umiejętność pracy w zespole',
          'Gotowość do pracy w stabilnym tempie przy dużych inwestycjach'
        ],
        uk: [
          'Досвід арматурних робіт',
          'Точність і відповідальність',
          'Уміння працювати в команді',
          'Готовність працювати у стабільному темпі на великих інвестиціях'
        ],
        en: [
          'Experience in steel fixing works',
          'Accuracy and responsibility',
          'Ability to work in a team',
          'Readiness to work steadily on large projects'
        ]
      }
    },
    {
      id: 4,
      path: 'pracownik-ogolnobudowlany',
      image: 'assets/video/photos/about-photo.png',
      title: {
        pl: 'Pracownik Ogólnobudowlany',
        uk: 'Загальнобудівельний працівник',
        en: 'General Construction Worker'
      },
      summary: {
        pl: 'Rola dla osób z doświadczeniem budowlanym, które chcą wejść do stabilnego zespołu robót żelbetowych i monolitycznych.',
        uk: 'Роль для людей з будівельним досвідом, які хочуть працювати у стабільній команді залізобетонних робіт.',
        en: 'A role for people with construction experience who want to join a stable reinforced concrete execution team.'
      },
      location: {
        pl: 'Wrocław i okolice',
        uk: 'Вроцлав та околиці',
        en: 'Wroclaw and nearby area'
      },
      employmentType: {
        pl: 'Pełny etat / elastyczna współpraca',
        uk: 'Повна зайнятість / гнучка співпраця',
        en: 'Full-time / flexible cooperation'
      },
      highlights: {
        pl: ['Pomoc w legalizacji', 'Darmowe zakwaterowanie', 'Stałe zlecenia'],
        uk: ['Допомога з легалізацією', 'Безкоштовне проживання', 'Постійні об’єкти'],
        en: ['Legalization support', 'Free accommodation', 'Stable workload']
      },
      offers: {
        pl: [
          'Legalne zatrudnienie na podstawie umowy',
          'Pomoc w legalizacji pobytu i pracy',
          'Darmowe zakwaterowanie',
          'Stałe zlecenia i stabilny grafik',
          'Pracę we Wrocławiu i okolicach',
          'Wynagrodzenie dopasowane do doświadczenia'
        ],
        uk: [
          'Офіційне працевлаштування за договором',
          'Допомога з легалізацією перебування та роботи',
          'Безкоштовне проживання',
          'Постійні об’єкти та стабільний графік',
          'Робота у Вроцлаві та околицях',
          'Оплата відповідно до досвіду'
        ],
        en: [
          'Legal employment based on contract',
          'Support with legalization of stay and work',
          'Free accommodation',
          'Stable projects and predictable schedule',
          'Work in Wroclaw and surrounding area',
          'Salary aligned with experience'
        ]
      },
      responsibilities: {
        pl: [
          'Montaż i rozbiórka szalunków',
          'Pomoc przy zbrojeniu i betonowaniu',
          'Prace ciesielskie i ogólnobudowlane',
          'Utrzymanie porządku na budowie',
          'Współpraca z brygadzistą i zespołem'
        ],
        uk: [
          'Монтаж і демонтаж опалубки',
          'Допомога при армуванні та бетонуванні',
          'Теслярські та загальнобудівельні роботи',
          'Підтримання порядку на будові',
          'Співпраця з бригадиром і командою'
        ],
        en: [
          'Assemble and dismantle formwork',
          'Support steel fixing and concreting works',
          'General carpentry and construction works',
          'Keep the site orderly',
          'Cooperate with foreman and crew'
        ]
      },
      requirements: {
        pl: [
          'Doświadczenie w pracach budowlanych',
          'Umiejętność pracy w zespole',
          'Gotowość do pracy również w innych miastach, gdy wymaga tego projekt',
          'Zaangażowanie i odpowiedzialne podejście do obowiązków'
        ],
        uk: [
          'Досвід будівельних робіт',
          'Уміння працювати в команді',
          'Готовність працювати також в інших містах, якщо цього вимагає проєкт',
          'Залученість і відповідальне ставлення до обов’язків'
        ],
        en: [
          'Experience in construction works',
          'Ability to work in a team',
          'Readiness to work in other cities when a project requires it',
          'Commitment and responsible attitude to duties'
        ]
      }
    }
];
