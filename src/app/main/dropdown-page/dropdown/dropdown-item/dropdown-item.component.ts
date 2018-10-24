import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent implements OnInit {

  constructor() { }

  /* INPUTS */
  @Input() nameDdItem: string;
  @Input() url: string;

  ngOnInit() {
  }

}
