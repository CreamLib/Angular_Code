import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselPageComponent {

  constructor(private app: AppComponent) {
  }

}
