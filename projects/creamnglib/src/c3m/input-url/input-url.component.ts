import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputUrlComponent implements OnInit {
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
