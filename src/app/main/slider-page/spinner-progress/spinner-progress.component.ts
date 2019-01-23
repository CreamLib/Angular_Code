import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-spinner-progress',
  templateUrl: './spinner-progress.component.html',
  styleUrls: ['./spinner-progress.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerProgressComponent implements OnInit {

  @Input() size: number = 50;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
