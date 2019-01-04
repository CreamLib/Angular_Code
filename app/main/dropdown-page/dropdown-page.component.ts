import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    const subComp = ['dropdown-item'];
    this.app.codeSnippets(subComp);
  }

}
