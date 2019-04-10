import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[c3mStepCurrent]'
})
export class StepsDirective implements OnInit {
  @Input('c3mStepCurrent') activeStep: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const liElement = this.el.nativeElement;
    if (this.activeStep) {
      liElement.setAttribute('aria-current', 'step');
    }
  }
}
