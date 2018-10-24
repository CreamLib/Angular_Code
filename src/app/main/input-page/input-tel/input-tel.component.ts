import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-tel',
  templateUrl: './input-tel.component.html',
  styleUrls: ['./input-tel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputTelComponent implements OnInit {

 // Inputs
  @Input() title;
  @Input() placeholder = '';
  @Input() name;
  @Input() id = '';

  constructor() { }

  ngOnInit() {
  }

}
