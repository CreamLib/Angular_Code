import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownPageComponent {

  constructor(private app: AppComponent) {
  }

}
