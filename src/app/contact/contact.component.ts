import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 51.096, lng: 17.036 }; // przykładowo Wrocław
  zoom = 14;

  options: google.maps.MapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: true,
    gestureHandling: 'greedy',
  };

  markerPosition: google.maps.LatLngLiteral = this.center;
  markerOptions: google.maps.MarkerOptions = {
    optimized: true,
    title: 'Leleka Construction'
  };
}
