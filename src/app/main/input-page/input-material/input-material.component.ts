import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-material',
  templateUrl: './input-material.component.html',
  styleUrls: ['./input-material.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputMaterialComponent implements OnInit {

  // Inputs
  @Input() title;
  @Input() placeholder = '';
  @Input() name;
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
