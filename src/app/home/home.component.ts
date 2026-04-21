import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { StatsBannerComponent, StatItem } from '../shared/stats-banner/stats-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, StatsBannerComponent, TranslocoDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly heroSummaryValues = ['2018', '60+', '100%'];

  companyStats: StatItem[] = [];

  private readonly destroyRef = inject(DestroyRef);

  constructor(private transloco: TranslocoService) {}

  ngOnInit(): void {
    this.updateStats();

    this.transloco.langChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateStats());
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updateStats(): void {
    this.companyStats = [
      { value: '2018', title: this.transloco.translate('stats.founded') },
      { value: '60+', title: this.transloco.translate('stats.projects') },
      { value: '15', title: this.transloco.translate('stats.cities') },
      { value: '100%', title: this.transloco.translate('stats.commitment') }
    ];
  }
}
