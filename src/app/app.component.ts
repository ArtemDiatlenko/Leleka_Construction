import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {VacancyStorage} from './storage/vacancy-storage';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private vacancyStorage: VacancyStorage) {
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
