import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {
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
