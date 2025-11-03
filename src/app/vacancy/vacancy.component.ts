import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacancyStorage } from '../storage/vacancy-storage';
import { Subject, takeUntil } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit, AfterViewInit, OnDestroy {

  vacancy: any = null;
  otherVacancies: any[] = [];

  private destroy$ = new Subject<void>();

  private scrollHandler = this.handleScrollAnimation.bind(this);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vacancyStorage: VacancyStorage
  ) {}


  ngOnInit() {

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const vacancyPath = params['path'];
      if (vacancyPath) {
        this.vacancy = this.vacancyStorage.getVacancyByPath(vacancyPath);
        this.otherVacancies = this.vacancyStorage.getVacanciesExcluding(v => v.path === vacancyPath);

        if (!this.vacancy) {
          this.router.navigate(['/']);
        } 
    }
    });

  }

  ngAfterViewInit(): void {
    // Trigger initial reveal after the view has mounted
    requestAnimationFrame(() => this.handleScrollAnimation());
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
