import {Component, OnInit, ElementRef, HostListener} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {VacancyStorage} from './storage/vacancy-storage';
import {NgForOf, NgIf} from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  langMenuOpen = false;
  activeLang: string = 'pl';

  constructor(private vacancyStorage: VacancyStorage, private transloco: TranslocoService, private el: ElementRef) {
    const saved = localStorage.getItem('lang');
    const initial = saved && ['pl','uk','en'].includes(saved) ? saved : (this.transloco.getActiveLang?.() || 'pl');
    this.setLang(initial);
  }

  toggleLangMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.langMenuOpen) return;
    const clickedInside = this.el.nativeElement.querySelector('.lang-switcher')?.contains(event.target as Node);
    if (!clickedInside) this.langMenuOpen = false;
  }

  setLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.activeLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    this.langMenuOpen = false;
  }

  vacancies:any = [];

  ngOnInit(): void {
        this.vacancies = this.vacancyStorage.getAllVacancies();
    }

  public currentYear: number = new Date().getFullYear();
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
