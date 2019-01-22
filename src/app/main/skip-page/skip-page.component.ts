import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-skip-page',
  templateUrl: './skip-page.component.html',
  styleUrls: ['./skip-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkipPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
  }
}

