import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {
  constructor() {}

  /* INPUTS */
  @Input() isOpen = false;
  @Input() nameDropdown: string;

  ngOnInit() {}

  /* Open / Close the Dropdown */
  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
    } else if (this.isOpen) {
      this.isOpen = false;
    }
  }
  close(): void {
    document.querySelector('details').removeAttribute('open');
    this.isOpen = false;
  }

}
