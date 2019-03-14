import { Component, AfterViewInit } from '@angular/core';
import * as svgxuse from 'svgxuse/svgxuse.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  component: 'accueil';
  constructor() {}

  ngAfterViewInit() {
    // test if the browser support shadow for svg use
    function supports_shadow() {
      if (document.head.attachShadow) {
        return true;
      } else {
        return false;
      }
    }
    //if not use svgxuse function
    if (!supports_shadow()) {
      svgxuse();
    }
  }
}
