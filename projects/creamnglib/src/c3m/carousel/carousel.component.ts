import { Component, ViewEncapsulation, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'c3m-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit, AfterViewInit {
  sizeLi = 0;
  public tabItemContent;
  groups: Array<CarouselItemComponent> = [];

  constructor(private eRef: ElementRef) {}

  // After View Init
  ngAfterViewInit() {
    // Select All Carousel Item Content
    this.tabItemContent = this.eRef.nativeElement.querySelectorAll('.carousel-item-content');

    // Calcul Size of all Carousel Item
    for (let i = 0; i < this.tabItemContent.length; i++) {
      this.sizeLi = this.sizeLi + this.tabItemContent[i].getBoundingClientRect().width;
    }

    // Opacity 0 for All Carousel Item
    for (let i = 0; i < this.tabItemContent.length; i++) {
      this.tabItemContent[i].style.opacity = '0';
    }

    // Opacity 1 for the first Carousel Item
    this.tabItemContent[0].style.opacity = '1';
  }

  // On Init
  ngOnInit() {
    // For the vanish Carousel Items, change the Aria Attributes and Tab Index
    this.groups.forEach((groupToClose: CarouselItemComponent) => {
      groupToClose.isVisible = false;
      groupToClose.tabIndex = '-1';
    });

    // For the visible Carousel Item, change the Aria Attributes and Tab Index
    this.groups[0].isVisible = true;
    this.groups[0].tabIndex = '0';
  }

  // Add a Carousel Item to the group of Carousel Item
  addGroup(group: CarouselItemComponent): void {
    this.groups.push(group);
  }

  // Click on Next Button
  next(group: CarouselItemComponent): void {
    // "index" is the index of the carousel item in the group
    const index = this.groups.indexOf(group);

    // "lengthGroup" is the length of the Carousel Item Group
    const lengthGroup = this.groups.length;

    // For the vanish Carousel Items, change the Aria Attributes and Tab Index
    this.groups.forEach((groupToClose: CarouselItemComponent) => {
      groupToClose.isVisible = false;
      groupToClose.tabIndex = '-1';
    });

    // If click next button with the last Slide (go to the first slide)
    if (index + 1 > lengthGroup - 1) {
      this.groups[0].isVisible = true;
      this.groups[0].tabIndex = '0';
      for (let i = 0; i < this.tabItemContent.length; i++) {
        this.tabItemContent[i].style.opacity = '0';
      }
      this.tabItemContent[lengthGroup - 1].style.opacity = '1';
      this.tabItemContent[0].style.transition = 'none';
      this.tabItemContent[0].style.transform =
        'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
      this.tabItemContent[lengthGroup - 1].style.transform =
        'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';

      setTimeout(() => {
        this.tabItemContent[0].style.opacity = '1';
        this.tabItemContent[0].style.transition = 'transform 0.3s';
        this.tabItemContent[0].style.zIndex = '10';
        this.tabItemContent[0].style.transform = 'translate(0,0)';
      }, 0);
    } else {
      this.groups[index + 1].isVisible = true;
      this.groups[index + 1].tabIndex = '0';
      for (let i = 0; i < this.tabItemContent.length; i++) {
        this.tabItemContent[i].style.opacity = '0';
      }
      this.tabItemContent[index].style.opacity = '1';
      this.tabItemContent[index + 1].style.transition = 'none';
      this.tabItemContent[index + 1].style.transform =
        'translate(+' + this.tabItemContent[index + 1].getBoundingClientRect().width + 'px, 0)';
      this.tabItemContent[index].style.transform =
        'translate(-' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';

      setTimeout(() => {
        this.tabItemContent[index + 1].style.opacity = '1';
        this.tabItemContent[index + 1].style.transition = 'transform 0.3s';
        this.tabItemContent[index + 1].style.zIndex = '10';
        this.tabItemContent[index + 1].style.transform = 'translate(0,0)';
      }, 0);
    }
  }

  /* Click on a previous button  */
  previous(group: CarouselItemComponent): void {
    const index = this.groups.indexOf(group);
    const lengthGroup = this.groups.length;

    this.groups.forEach((groupToClose: CarouselItemComponent) => {
      groupToClose.isVisible = false;
      groupToClose.tabIndex = '-1';
    });

    if (index - 1 < 0) {
      this.groups[lengthGroup - 1].isVisible = true;
      this.groups[lengthGroup - 1].tabIndex = '0';

      for (let i = 0; i < this.tabItemContent.length; i++) {
        this.tabItemContent[i].style.opacity = '0';
      }

      this.tabItemContent[0].style.opacity = '1';
      this.tabItemContent[lengthGroup - 1].style.transition = 'none';
      this.tabItemContent[lengthGroup - 1].style.transform =
        'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
      this.tabItemContent[0].style.transform =
        'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';

      setTimeout(() => {
        this.tabItemContent[lengthGroup - 1].style.opacity = '1';
        this.tabItemContent[lengthGroup - 1].style.transition = 'transform 0.3s';
        this.tabItemContent[lengthGroup - 1].style.zIndex = '10';
        this.tabItemContent[lengthGroup - 1].style.transform = 'translate(0,0)';
      }, 0);
    } else {
      this.groups[index - 1].isVisible = true;
      this.groups[index - 1].tabIndex = '0';

      this.tabItemContent[index].style.opacity = '1';
      this.tabItemContent[index - 1].style.transition = 'none';
      this.tabItemContent[index - 1].style.transform =
        'translate(-' + this.tabItemContent[index - 1].getBoundingClientRect().width + 'px, 0)';
      this.tabItemContent[index].style.transform =
        'translate(+' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';

      setTimeout(() => {
        this.tabItemContent[index - 1].style.opacity = '1';
        this.tabItemContent[index - 1].style.transition = 'transform 0.3s';
        this.tabItemContent[index - 1].style.zIndex = '10';
        this.tabItemContent[index - 1].style.transform = 'translate(0,0)';
      }, 0);
    }
  }

  /* Function to go on a specific item with Bullepoint Click Event */
  goTo(indexToGo: number, group: CarouselItemComponent): void {
    const random = Math.floor(Math.random() * 2 + 0);
    console.log(random);

    this.groups.forEach((groupToClose: CarouselItemComponent) => {
      groupToClose.isVisible = false;
      groupToClose.tabIndex = '-1';
    });

    this.groups[indexToGo].isVisible = true;
    this.groups[indexToGo].tabIndex = '0';
    this.tabItemContent[indexToGo].style.transition = 'none';
    if (random === 1) {
      this.tabItemContent[indexToGo].style.transform =
        'translate(+' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
      for (let i = 0; i < this.tabItemContent.length; i++) {
        this.tabItemContent[i].style.transform =
          'translate(-' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
      }
    } else if (random === 0) {
      this.tabItemContent[indexToGo].style.transform =
        'translate(-' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
      for (let i = 0; i < this.tabItemContent.length; i++) {
        this.tabItemContent[i].style.transform =
          'translate(+' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
      }
    }

    setTimeout(() => {
      this.tabItemContent[indexToGo].style.opacity = '1';
      this.tabItemContent[indexToGo].style.transition = 'transform 0.3s';
      this.tabItemContent[indexToGo].style.zIndex = '10';
      this.tabItemContent[indexToGo].style.transform = 'translate(0,0)';
    }, 300);
  }
}
