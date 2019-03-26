import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadioItemComponent implements OnInit {
  // Inputs
  @Input() title = '';
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() required: boolean;

  constructor() {}

  ngOnInit() {}
}
