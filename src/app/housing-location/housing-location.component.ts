import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
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
