import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectPageComponent implements OnInit {

  constructor(private app: AppComponent) {

  }

  ngOnInit() {
      this.app.codeSnippets('');
  }


}
