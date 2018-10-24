import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'c3m-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

 groups: Array<AccordionItemComponent> = [];

  addGroup(group: AccordionItemComponent): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordionItemComponent): void {
    this.groups.forEach((group: AccordionItemComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  closeAll(openGroup: AccordionItemComponent): void {
    this.groups.forEach((group: AccordionItemComponent) => {
        group.isOpen = false;
    });
  }

  removeGroup(group: AccordionItemComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
