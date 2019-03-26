import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsPageComponent implements OnInit {
  constructor(private app: AppComponent) {}

  ngOnInit() {
    const subComp = ['tabs-item'];
  }
}
