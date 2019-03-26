import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'c3m-select-datalists',
  templateUrl: './select-datalists.component.html',
  styleUrls: ['./select-datalists.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectDatalistsComponent implements OnInit {
  // Childs
  @ViewChild('inputList1') myInput1: ElementRef;
  @ViewChild('inputList2') myInput2: ElementRef;
  @ViewChild('dataList') myDataList: ElementRef;

  // Inputs
  @Input() title1;
  @Input() title2;
  @Input() name1;
  @Input() name2;
  @Input() id1 = '';
  @Input() id2 = '';
  @Input() list;

  private myListId;
  // Constructor
  constructor(private http: Http) {}

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
    this.myInput1.nativeElement.setAttribute('list', this.myListId);
    this.myInput2.nativeElement.setAttribute('list', this.myListId);
    this.myDataList.nativeElement.setAttribute('id', this.myListId);
  }
}
