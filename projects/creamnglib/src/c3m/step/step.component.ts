import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
  ViewChild,
  Input,
  OnInit
} from '@angular/core';
import { StepItem } from '../../step-item';

@Component({
  selector: 'c3m-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepComponent implements OnInit, AfterViewInit {
  @Input() activeStep: string;
  @Input() stepLink = '#';
  indexNum: number;
  isOver: boolean;
  @ViewChildren('stepLi') stepLiReference: QueryList<ElementRef>;
  stepLi: Array<ElementRef>;
  @Input() steps: StepItem[];
  sizeInit = 0;
  widthBreak: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.indexNum = parseInt(this.activeStep, 10) - 1;
  }

  ngAfterViewInit() {
    this.stepLi = this.stepLiReference.toArray();

    /* CALCUL BREAKPOINT ON PAGE LOAD */
    for (let i = 0; i < this.stepLi.length; i++) {
      this.sizeInit = this.stepLi[i].nativeElement.clientWidth + this.sizeInit;
      console.log(this.sizeInit);
    }

    if (this.stepLi[this.stepLi.length - 1].nativeElement.offsetTop !== this.stepLi[0].nativeElement.offsetTop) {
      this.isOver = true;
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.stepLi[this.stepLi.length - 1].nativeElement.offsetTop > this.stepLi[0].nativeElement.offsetTop) {
      if (
        this.stepLi[this.stepLi.length - 1].nativeElement.offsetTop > this.stepLi[0].nativeElement.offsetTop &&
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
}
