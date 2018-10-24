import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-checkbox-button',
  templateUrl: './checkbox-button.component.html',
  styleUrls: ['./checkbox-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxButtonComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
