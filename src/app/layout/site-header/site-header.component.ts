import { NgForOf, NgIf } from '@angular/common';
import { Component, DestroyRef, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { AppLang, DEFAULT_LANG, toAppLang } from '../../core/i18n/app-language';
import { Vacancy } from '../../core/models/vacancy.model';
import { VacancyService } from '../../core/services/vacancy.service';

type LanguageOption = {
  code: AppLang;
  label: string;
};

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink, RouterLinkActive, TranslocoDirective],
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  readonly brandName = 'Leleka Construction';
  readonly langOptions: LanguageOption[] = [
    { code: 'pl', label: 'Polski' },
    { code: 'uk', label: 'Українська' },
    { code: 'en', label: 'English' }
  ];

  activeLang: AppLang = DEFAULT_LANG;
  careerMenuOpen = false;
  langMenuOpen = false;
  mobileMenuOpen = false;
  vacancies: Vacancy[] = [];

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private router: Router,
    private transloco: TranslocoService,
    private vacanciesService: VacancyService
  ) {}

  ngOnInit(): void {
    this.transloco.langChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(lang => this.applyLanguage(toAppLang(lang)));

    const savedLang = toAppLang(localStorage.getItem('lang') ?? this.transloco.getActiveLang());
    this.setLang(savedLang);
  }

  get isCareerRoute(): boolean {
    return this.router.url.startsWith('/vacancies');
  }

  closeNavigation(): void {
    this.mobileMenuOpen = false;
    this.careerMenuOpen = false;
    this.langMenuOpen = false;
    this.syncBodyScroll();
  }

  setLang(lang: string): void {
    const nextLang = toAppLang(lang);

    if (this.transloco.getActiveLang() !== nextLang) {
      this.transloco.setActiveLang(nextLang);
    } else {
      this.applyLanguage(nextLang);
    }

    localStorage.setItem('lang', nextLang);
    this.langMenuOpen = false;
  }

  toggleCareerMenu(event?: MouseEvent): void {
    event?.stopPropagation();
    this.careerMenuOpen = !this.careerMenuOpen;
    this.langMenuOpen = false;
  }

  toggleLangMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
    this.careerMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;

    if (!this.mobileMenuOpen) {
      this.careerMenuOpen = false;
      this.langMenuOpen = false;
    }

    this.syncBodyScroll();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideHeader = this.elementRef.nativeElement.contains(event.target as Node);

    if (!clickedInsideHeader) {
      this.closeNavigation();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeNavigation();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1440 && this.mobileMenuOpen) {
      this.closeNavigation();
    }
  }

  private applyLanguage(lang: AppLang): void {
    this.activeLang = lang;
    this.vacancies = this.vacanciesService.getAll(lang);
    document.documentElement.lang = lang;
  }

  private syncBodyScroll(): void {
    document.body.classList.toggle('menu-open', this.mobileMenuOpen);
  }
}
