import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BottomComponent implements OnInit {
  @Input() copyright: string;
  constructor() {}

  ngOnInit() {}
}
