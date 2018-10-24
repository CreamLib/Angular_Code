import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.app.codeSnippets('');
  }
}
