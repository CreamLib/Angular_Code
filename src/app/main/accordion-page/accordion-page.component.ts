import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    const subComp = ['accordion-item'];
    this.app.codeSnippets(subComp);
  }
}
