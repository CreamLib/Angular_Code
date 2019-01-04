import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-checkbox-group-item',
  templateUrl: './checkbox-group-item.component.html',
  styleUrls: ['./checkbox-group-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxGroupItemComponent implements OnInit {

  // Inputs
  @Input() title = '';
  @Input() name: string;
  @Input() value: string;
  @Input() id: string;
      
  constructor() { }

  ngOnInit() {
  }

}
