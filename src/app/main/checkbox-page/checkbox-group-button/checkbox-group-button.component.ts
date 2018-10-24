import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-checkbox-group-button',
  templateUrl: './checkbox-group-button.component.html',
  styleUrls: ['./checkbox-group-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxGroupButtonComponent implements OnInit {


  @Input() title: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
