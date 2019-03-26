import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'c3m-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  // Inputs
  @Input() title;

  // Constructor
  constructor(private http: Http) {}

  // Array of all options
  listItem: any[];

  // On Init
  ngOnInit() {
    // Get Data of a JSON (or other...)
    from(this.http.get('assets/json/dataList.json'))
      .pipe(map((response: Response) => response.json())) // Specify JSON type
      .subscribe(data => {
        // Set items to response Json
        this.listItem = data;
      });
  }
}
