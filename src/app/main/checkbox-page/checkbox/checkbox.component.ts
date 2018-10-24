import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  // Inputs
  @Input() title = '';
  @Input() name: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
