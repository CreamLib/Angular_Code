import { Component, OnInit, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownTestComponent implements OnInit {
  @ViewChild('dets') dets: ElementRef;
  @ViewChild('detsContent') detsContent: ElementRef;

  @Input() nameDropdown: string;
  @Input() isOpen = false;

  // Keyboard Keys
  keys = {
    tab: 9,
    enter: 13,
    esc: 27
  };

  constructor() {}

  ngOnInit() {}

  /* Open / Close the Dropdown */

  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
    } else if (this.isOpen) {
      this.isOpen = false;
    }
  }

  closeAll() {
    this.dets.nativeElement.open = null;
    this.isOpen = false;
  }
}
