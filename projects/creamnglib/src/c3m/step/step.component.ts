import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { StepItemComponent } from './step-item/step-item.component';

@Component({
  selector: 'c3m-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepComponent implements AfterViewInit, AfterViewChecked {
  /* VARIABLES */
  itemStepTab: StepItemComponent[] = [];
  theActiveStepItem: number;
  isOver: boolean;
  widthBreak: number;
  itemsStepTabReference: ElementRef[] = [];
  sizeInit = 0;
  StepItemComponentBis = StepItemComponent;

  /* CONSTRUCTOR */
  constructor(private cdr: ChangeDetectorRef) {}

  /* AFTER VIEW INIT */
  ngAfterViewInit() {
    this.itemStepTab.forEach((StepItemComponentBis, index) => {
      StepItemComponentBis.indexStep = index + 1;
      this.itemsStepTabReference.push(StepItemComponentBis.reference);
      if (StepItemComponentBis.isActive) {
        this.theActiveStepItem = StepItemComponentBis.indexStep;
      }
    });

    /* CALCUL BREAKPOINT ON PAGE LOAD */
    for (let i = 0; i < this.itemsStepTabReference.length - 1; i++) {
      this.sizeInit = this.itemsStepTabReference[i].nativeElement.clientWidth + this.sizeInit;
    }

    if (
      this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop !==
      this.itemsStepTabReference[0].nativeElement.offsetTop
    ) {
      this.isOver = true;
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  /* AFTER VIEW CHECK */
  ngAfterViewChecked() {
    /* For Each items */
    this.itemStepTab.forEach((StepItemComponentBis, index) => {
      /* if after the active item, add class future */
      if (index + 1 > this.theActiveStepItem) {
        StepItemComponentBis.Future = true;
      } else {
        StepItemComponentBis.Future = false;
      }
      /* if before the active item, add class past */
      if (index + 1 < this.theActiveStepItem) {
        StepItemComponentBis.Past = true;
      } else {
        StepItemComponentBis.Past = false;
      }
    });
  }

  /* Resize breakpoint tab*/
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (
      this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop >
      this.itemsStepTabReference[0].nativeElement.offsetTop
    ) {
      if (
        this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop >
          this.itemsStepTabReference[0].nativeElement.offsetTop &&
        this.isOver !== true
      ) {
        this.widthBreak = event.target.innerWidth;
        this.isOver = true;
      }

      if (this.widthBreak) {
        if (event.target.innerWidth > this.widthBreak && this.isOver === true) {
          this.isOver = false;
        }
      } else {
        this.widthBreak = this.sizeInit;
        if (event.target.innerWidth >= this.widthBreak) {
          this.isOver = false;
        }
      }
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  /* ADD AN ITEM INTO ITEMS TAB */
  addTab(stepItem: StepItemComponent) {
    stepItem.isActive = false; // And set isActive var to False
    this.itemStepTab.push(stepItem);
  }
}
