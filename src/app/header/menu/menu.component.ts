import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'c3m-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

 groups: Array<MenuItemComponent> = [];

  addGroup(group: MenuItemComponent): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: MenuItemComponent): void {
    this.groups.forEach((group: MenuItemComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  closeAll(openGroup: MenuItemComponent): void {
    this.groups.forEach((group: MenuItemComponent) => {
        group.isOpen = false;
    });
  }

  removeGroup(group: MenuItemComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
