import {Component, OnInit, ElementRef, HostListener} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Vacancy, VacancyStorage} from './storage/vacancy-storage';
import {NgForOf, NgIf} from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, NgIf, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly title = 'Leleka Construction';

  langMenuOpen = false;
  mobileMenuOpen = false;
  careerMenuOpen = false;
  activeLang: string = 'pl';

  constructor(
    private vacancyStorage: VacancyStorage,
    private transloco: TranslocoService,
    private el: ElementRef,
    private router: Router
  ) {
    const saved = localStorage.getItem('lang');
    const initial = saved && ['pl','uk','en'].includes(saved) ? saved : (this.transloco.getActiveLang?.() || 'pl');
    this.setLang(initial);
  }

  toggleLangMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.careerMenuOpen = false;
    this.syncBodyScroll();
  }

  toggleCareerMenu(): void {
    this.careerMenuOpen = !this.careerMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as Node;

    if (this.langMenuOpen) {
      const clickedInsideLang = this.el.nativeElement.querySelector('.lang-switcher')?.contains(target);
      if (!clickedInsideLang) {
        this.langMenuOpen = false;
      }
    }

    if (this.mobileMenuOpen) {
      const clickedInsidePanel = this.el.nativeElement.querySelector('.site-header__panel')?.contains(target);
      const clickedMenuToggle = this.el.nativeElement.querySelector('.menu-toggle')?.contains(target);
      if (!clickedInsidePanel && !clickedMenuToggle) {
        this.closeNavigation();
      }
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1180 && this.mobileMenuOpen) {
      this.closeNavigation();
    }
  }

  setLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.activeLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    this.langMenuOpen = false;
  }

  closeNavigation(): void {
    this.mobileMenuOpen = false;
    this.careerMenuOpen = false;
    this.langMenuOpen = false;
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    document.body.classList.toggle('menu-open', this.mobileMenuOpen);
  }

  vacancies: Vacancy[] = [];

  ngOnInit(): void {
    this.vacancies = this.vacancyStorage.getAllVacancies();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.closeNavigation());
  }

  public currentYear: number = new Date().getFullYear();
}
