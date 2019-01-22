import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationPageComponent implements OnInit {

  constructor(private app: AppComponent) {

  }

  ngOnInit() {
  }

}
