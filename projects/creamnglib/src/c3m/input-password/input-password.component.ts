import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputPasswordComponent implements OnInit {
  // Inputs
  @Input() id = '';
  @Input() name = '';
  @Input() value = '';
  @Input() autocomplete = 'on';
  @Input() maxlength = '';
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() placeholder = '';

  constructor() {}

  ngOnInit() {}
}
