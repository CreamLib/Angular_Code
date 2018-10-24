import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-checkbox-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.app.codeSnippets('');
  }
}


