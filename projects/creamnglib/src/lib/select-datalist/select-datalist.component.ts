import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'c3m-select-datalist',
  templateUrl: './select-datalist.component.html',
  styleUrls: ['./select-datalist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectDatalistComponent implements OnInit {

  // Childs
  @ViewChild('inputList') myInput: ElementRef;
  @ViewChild('dataList') myDataList: ElementRef;
  // Inputs
  @Input() title;
  @Input() name;
  @Input() id = '';
  @Input() list;

  private myListId;
  // Constructor
  constructor(private http: Http) {

   }

  // Array of all options
  allOptions: any[];

  // On Init
  ngOnInit() {

      // Get Data of a JSON (or other...)
      from(this.http.get('assets/json/dataSelect.json'))
          .pipe(map((response: Response) => response.json())) // Specify JSON type
          .subscribe(data => {
              // Set items to response Json
              this.allOptions = data;
          });
          this.myListId = this.list;
          this.myInput.nativeElement.setAttribute('list', this.myListId);
          this.myDataList.nativeElement.setAttribute('id', this.myListId);
  }
}
