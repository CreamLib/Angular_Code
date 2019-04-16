import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  ViewEncapsulation,
  HostListener,
  ViewChildren,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { TabComponent } from './tabs-item/tabs-item.component';

@Component({
  selector: 'c3m-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterViewInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren('tabs') tabsElement: QueryList<ElementRef>;
  @ViewChild('container') container: ElementRef;
  isOver: boolean;
  widthBreak: number;
  sizeInit = 0;
  marginInit: any;
  arrayTmp: ElementRef[];

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  /* breakpoint tab */
  ngAfterViewInit() {
    this.arrayTmp = this.tabsElement.toArray();
    for (let i = 0; i < this.arrayTmp.length - 1; i++) {
      this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;
    }

    if (this.tabsElement.last.nativeElement.offsetTop === this.tabsElement.first.nativeElement.offsetTop) {
      this.isOver = true;
    } else if (this.tabsElement.length === 1) {
      this.isOver = true;
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (
      this.tabsElement.length === 1 ||
      //this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop
      this.sizeInit +
        parseFloat(getComputedStyle(this.tabsElement.last.nativeElement).marginRight) * (this.tabsElement.length + 1) >
        this.container.nativeElement.clientWidth
    ) {
      this.isOver = false;
    } else {
      this.isOver = true;
    }
    this.cdr.detectChanges();
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(t => (t.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
