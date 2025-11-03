import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatsBannerComponent, StatItem } from '../shared/stats-banner/stats-banner.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, StatsBannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent {
  statsItems: StatItem[] = [
    { value: '2018', title: 'rok założenia firmy' },
    { value: '60+',  title: 'ukończonych inwestycji' },
    { value: '15',   title: 'miast, w których działamy' },
    { value: '100%', title: 'zaangażowania w każdy projekt' }
  ];
  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
