import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'c3m-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListOrderComponent implements OnInit {

  // Inputs
  @Input() title;

  // Constructor
  constructor(private http: Http) { }

  // Array of all options
  listItem: any[];


  // On Init
  ngOnInit() {
      // Get Data of a JSON (or other...)
      this.http.get('assets/json/dataList.json')
          .map((response: Response) => response.json()) // Specify JSON type
          .subscribe(data => {
              // Set items to response Json
              this.listItem = data;
          });
  }

}
