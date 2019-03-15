import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionPageComponent {
  constructor(private app: AppComponent) {}
}
