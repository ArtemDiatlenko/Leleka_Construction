import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StatItem = { value: string; title: string };

@Component({
  selector: 'app-stats-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="statistics-container" aria-label="Statystyki firmy">
      <div class="stats-grid">
        <div class="stat-item" *ngFor="let s of stats">
          <div class="stat-value">{{ s.value }}</div>
          <div class="stat-title">{{ s.title }}</div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./stats-banner.component.css'],
})
export class StatsBannerComponent {
  @Input() stats: StatItem[] = [];
}