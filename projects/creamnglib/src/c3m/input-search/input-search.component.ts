import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputSearchComponent implements OnInit {
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
