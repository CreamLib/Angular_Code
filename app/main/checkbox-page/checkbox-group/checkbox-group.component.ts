import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxGroupComponent implements OnInit {

  // Inputs
  @Input() legend = '';

  constructor() { }

  ngOnInit() {
  }

}
