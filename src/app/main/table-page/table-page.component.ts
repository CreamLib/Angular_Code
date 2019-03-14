import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TablePageComponent implements OnInit {
  constructor(private app: AppComponent) {}

  ngOnInit() {}
}
