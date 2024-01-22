import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `<p>details works! {{ housingLocationId }}</p>`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;
    constructor() {
      // converts the id parameter acquired from the route from a string to a number.
        this.housingLocationId = Number(this.route.snapshot.params['id']);
    }
}
