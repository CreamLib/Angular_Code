import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {

  // Inputs
  @Input() title;
  @Input() placeholder = '';
  @Input() name;
  @Input() id = '';

  constructor() { }

  ngOnInit() {
  }

}
