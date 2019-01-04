import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BottomComponent implements OnInit {

  @Input() copyright: string;
  constructor() { }

  ngOnInit() {
  }

}
