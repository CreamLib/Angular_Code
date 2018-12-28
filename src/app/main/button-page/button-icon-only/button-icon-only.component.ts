import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-button-icon-only',
  templateUrl: './button-icon-only.component.html',
  styleUrls: ['./button-icon-only.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonIconOnlyComponent implements OnInit {

  // Inputs
  @Input() class = '';

  constructor() {}

  ngOnInit() {}

}
