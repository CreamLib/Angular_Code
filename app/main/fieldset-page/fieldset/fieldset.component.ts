import { Component,Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c3m-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldsetComponent implements OnInit {

  /* Inputs */
  @Input() legend: string;

  constructor() { }

  ngOnInit() {
  }

}
