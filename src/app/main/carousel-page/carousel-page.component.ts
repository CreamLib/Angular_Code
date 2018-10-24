import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    let subComp = ['carousel-item'];
    this.app.codeSnippets(subComp);
  }

}
