import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacancyStorage } from '../storage/vacancy-storage';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit, OnDestroy {

  vacancy: any = null;
  otherVacancies: any[] = [];

  private scrollHandler = this.handleScrollAnimation.bind(this);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vacancyStorage: VacancyStorage
  ) {}

  statsItems = [
    { title: 'Мы работаем', value: '7 лет' },
    { title: 'Довольных клиентов', value: '500+' },
    { title: 'Выполненных проектов', value: '1200' },
    { title: 'Команда специалистов', value: '25' }
  ];

  items = [
    { title: 'Бокс 1', content: 'Содержимое первого бокса' },
    { title: 'Бокс 2', content: 'Содержимое второго бокса' },
    { title: 'Бокс 3', content: 'Содержимое третьего бокса' },
    { title: 'Бокс 4', content: 'Содержимое четвертого бокса' }
  ];

  ngOnInit() {

    this.route.params.subscribe(params => {
      const vacancyPath = params['path'];
      if (vacancyPath) {
        this.vacancy = this.vacancyStorage.getVacancyByPath(vacancyPath);
        this.otherVacancies = this.vacancyStorage.getVacanciesExcluding(v => v.path === vacancyPath);

        if (!this.vacancy) {
          this.router.navigate(['/']);
        } else {
          // невелика затримка, щоб DOM встиг відрендеритись
          setTimeout(() => this.handleScrollAnimation(), 100);
        }
    }
    });

    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach((el: Element) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  selectVacancy(selected: any) {
    this.router.navigate(['/vacancy', selected.path]);
    this.otherVacancies = this.otherVacancies.filter(v => v.path !== selected.path);
  }
}
