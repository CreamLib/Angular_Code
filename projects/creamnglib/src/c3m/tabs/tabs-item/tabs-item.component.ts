import { Component, Input, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'c3m-tab',
  templateUrl: './tabs-item.component.html',
  styleUrls: ['./tabs-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit, AfterViewInit {
  @Input() tabTitle: string;
  @Input() active: boolean;
  @Input() idTab: number;
  @Input() isDisabled: boolean;
  tabID: string;
  panelID: string;

  /* Constructor Tab Component */
  constructor() {
    this.idTab = this.randomID();
  }

  /* ID for Accessbility */
  ngOnInit() {
    this.tabID = 'tab' + this.idTab;
    this.panelID = 'panel' + this.idTab;
  }

  /* ID for Accessbility */
  ngAfterViewInit() {
    this.tabID = 'tab' + this.idTab;
    this.panelID = 'panel' + this.idTab;
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
