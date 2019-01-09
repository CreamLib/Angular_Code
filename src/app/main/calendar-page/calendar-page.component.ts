import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {
  constructor(private app: AppComponent) {
  }
}
