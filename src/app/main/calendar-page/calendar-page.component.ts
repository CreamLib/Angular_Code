import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {
  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    let subComp = ['tabs-item'];
    this.app.codeSnippets(subComp);
  }
}
