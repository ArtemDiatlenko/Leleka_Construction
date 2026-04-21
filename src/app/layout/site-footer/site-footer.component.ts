import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, TranslocoDirective],
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  readonly brandName = 'Leleka Construction';
  readonly currentYear = new Date().getFullYear();
}
