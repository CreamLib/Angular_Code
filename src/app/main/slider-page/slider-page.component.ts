import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
      this.app.codeSnippets('');
  }
}
