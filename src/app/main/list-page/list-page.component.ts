import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { ListValue } from 'creamnglib';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListPageComponent {
  listItem: ListValue[] = [];
  constructor(private app: AppComponent, private http: Http) {
    // Get Data of a JSON (or other...)
    http
      .get('assets/json/dataList.json')
      .pipe(
        map((response: Response) => {
          return response.json();
        })
      ) // Specify JSON type
      .subscribe(data => {
        // Set items to response Json
        this.listItem = data;
      });
  }
}
