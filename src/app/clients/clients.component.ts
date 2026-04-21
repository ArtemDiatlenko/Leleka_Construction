import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoDirective],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {}
