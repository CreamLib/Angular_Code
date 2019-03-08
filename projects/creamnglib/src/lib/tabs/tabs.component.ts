import { Component, ViewEncapsulation, Input, ElementRef, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef, HostListener } from '@angular/core';
import { TabComponent } from './tabs-item/tabs-item.component';

@Component({
  selector: 'c3m-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterViewInit {

  /* List of Tabs Element */
  @ViewChildren('tabs') tabsElement: QueryList<ElementRef>;

  /* Variables */
  tabs: TabComponent[] = [];
  isOver: boolean;
  widthBreak: number;
  sizeInit = 0;
  arrayTmp: ElementRef[] = [];
  startIndexActiv = 0;

  /* Resize breakpoint tab */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.tabsElement.length == 1 || this.tabsElement.last.nativeElement.offsetTop == this.tabsElement.first.nativeElement.offsetTop) {
      this.isOver = true;
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  /* add tab to tab table and select tab active */
  addTab(tab: TabComponent) {
    if (this.tabs.length === this.startIndexActiv) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  /* close tabs et open the active tab */
  selectTab(tab: TabComponent) {
    this.tabs.forEach((TabComponent) => {
      TabComponent.isActive = false;
    });
    tab.isActive = true;
    }


  /* breakpoint tab */
  ngAfterViewInit() {

    this.arrayTmp = this.tabsElement.toArray();
    for ( let i = 0; i < this.arrayTmp.length - 1; i ++ ) {
        this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;
    }

    if (this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop ) {
      this.isOver = true;
    } else if(this.tabsElement.length == 1) {
       this.isOver = true;
    } else {
      this.isOver = false;
    }
      this.cdr.detectChanges();
  }


  /* constructor tab */
  constructor(private cdr: ChangeDetectorRef) {}

}
