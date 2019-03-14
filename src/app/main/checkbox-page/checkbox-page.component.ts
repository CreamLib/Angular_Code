import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-checkbox-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxPageComponent {
  constructor(private app: AppComponent) {}
}
