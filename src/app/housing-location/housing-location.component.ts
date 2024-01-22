import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  /*
  El signo de exclamación (!) en TypeScript asegura que la propiedad será asignada antes de ser utilizada.
  Se usa aquí porque la inicialización de la propiedad de entrada sucede después de la creación del componente,
  con valores proporcionados desde el componente contenedor.
  https://angular.io/tutorial/first-app/first-app-lesson-05
  */
  @Input() housingLocation!: HousingLocation;
}
