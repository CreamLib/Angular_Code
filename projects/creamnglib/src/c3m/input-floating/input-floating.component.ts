import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-floating',
  templateUrl: './input-floating.component.html',
  styleUrls: ['./input-floating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputFloatingComponent implements OnInit {
  // Inputs
  @Input() title;
  @Input() floating = 'bottom';
  @Input() name;
  @Input() id;

  constructor() {}

  ngOnInit() {}
}
