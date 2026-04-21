import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

export type StatItem = {
  value: string;
  title: string;
};

@Component({
  selector: 'app-stats-banner',
  standalone: true,
  imports: [NgForOf, TranslocoDirective],
  templateUrl: './stats-banner.component.html',
  styleUrls: ['./stats-banner.component.css']
})
export class StatsBannerComponent {
  @Input() stats: readonly StatItem[] = [];

  trackByTitle = (_: number, stat: StatItem) => stat.title;
}
