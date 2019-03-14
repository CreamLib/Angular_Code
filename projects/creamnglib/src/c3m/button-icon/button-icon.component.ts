import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonIconComponent implements OnInit {
  // Inputs
  @Input() class = '';

  constructor() {}

  ngOnInit() {}
}
