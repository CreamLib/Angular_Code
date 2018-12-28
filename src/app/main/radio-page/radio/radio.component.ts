import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { RadioItemComponent } from './radio-item/radio-item.component';

@Component({
  selector: 'c3m-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadioComponent implements OnInit {

  // Inputs
  @Input() legend = '';

  constructor() { }

  ngOnInit() {}

}
