import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-tel',
  templateUrl: './input-tel.component.html',
  styleUrls: ['./input-tel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputTelComponent implements OnInit {
  // Inputs
  @Input() id = '';
  @Input() name = '';
  @Input() value = '';
  @Input() autocomplete = 'on';
  @Input() maxlength = '';
  @Input() pattern = '';
  @Input() title = '';
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() placeholder = '';

  constructor() {}

  ngOnInit() {}
}
