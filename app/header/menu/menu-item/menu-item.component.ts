import { Component, ViewEncapsulation, Input, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'c3m-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

  @Input() nameButton: string;
  @Input() idSvg: string;
  @Input() isOpen: boolean;
  @Input() index: number;
  tabID: string;
  panelID: string;

  /* By default , add item to accordion */
  constructor(private menu: MenuComponent) {
    this.menu.addGroup(this);
  }

  /* remove item to accordion*/
  ngOnDestroy() {
    this.menu.removeGroup(this);
  }

  /* changes */
  ngOnChanges(changes: SimpleChanges) {
    for (const change in changes) {
      if (changes.hasOwnProperty(change)) {
        const changedProp = changes[change];

        if (!changedProp.isFirstChange()) {
          this.menu.groups[this.index + 1].toggleOpen();
        }
      }
    }
  }

  /* initialisation */
  ngOnInit() {
    this.tabID = 'tab' + this.index;
    this.panelID = 'panel' + this.index;
  }

  /* when view init */
  ngAfterViewInit() {
    this.tabID = 'tab' + this.index;
    this.panelID = 'panel' + this.index;
  }


  /* open accordion'element */
  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.menu.closeOthers(this);
    } else if (this.isOpen) {
      this.menu.closeAll(this);
    }
  }
}
