import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-breadcrumbs-page',
  templateUrl: './breadcrumbs-page.component.html',
  styleUrls: ['./breadcrumbs-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
  }
}
