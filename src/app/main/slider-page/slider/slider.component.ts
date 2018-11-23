import {Component, ElementRef, Input, AfterViewInit, ViewChild, ViewEncapsulation, HostListener} from '@angular/core';

@Component({
  selector: 'c3m-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements AfterViewInit {

    /* INPUTS */
    @Input() id: string;
    @Input() name: string;
    @Input() value: string;
    @Input() min;
    @Input() max;
    @Input() step: string;
    @Input() required: boolean;
    @Input() disabled: boolean;

    /* CHILDRENS */
    @ViewChild('slider') input: ElementRef;
    @ViewChild('output') output: ElementRef;

    /* VARIABLES */
    isBubble: boolean;
    width: number;
    point: number;
    offset = 0;
    newPoint;

    /* CONSTRUCTOR */
    constructor(private myComponent: ElementRef) { }

   /* AFTER VIEW INIT */
   ngAfterViewInit() {
      this.isBubble = this.myComponent.nativeElement.classList.contains('bubble');
       // If contains Bubble class
      if (this.isBubble) {
          this.setPositionBubble();
      }
   }
    /* Resize breakpoint tab */
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (this.isBubble) {
            this.setPositionBubble();
        }
    }
    /* Display value */
    showValue() {
      if (this.isBubble) {
          this.setPositionBubble();
      }
      this.output.nativeElement.innerHTML = this.input.nativeElement.value;
  }

   /* Move the output with the slider */
    setPositionBubble() {
        this.width = this.input.nativeElement.getBoundingClientRect().width;
        this.point = (this.input.nativeElement.value - this.min) / (this.max - this.min);

       if (this.point < 0.5) {
            this.offset = ((this.point * 2) * -12) + 12;
       } else if (this.point > 0.5) {
           this.offset = ((this.point - 0.5) * 2) * -12;

        }
          this.newPoint = this.width * this.point;
          this.output.nativeElement.style.left = this.newPoint + this.offset + 'px';
  }
}
