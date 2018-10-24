import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CarouselComponent} from '../carousel.component';

@Component({
  selector: 'c3m-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselItemComponent implements OnInit, AfterViewInit {

  @Input() isVisible = true;
  @Input() index: number;
  @Input() tabIndex = '-1';
  @Input() itemID: string;

  constructor(private carousel: CarouselComponent) {
    this.carousel.addGroup(this);
  }

  ngOnInit() {
    this.itemID = 'item' + this.index;
  }

  ngAfterViewInit() {
      this.itemID = 'item' + this.index;
  }

  previousSlide(): void {
      this.carousel.previous(this);
  }

  nextSlide(): void {
      this.carousel.next(this);
    }

}
