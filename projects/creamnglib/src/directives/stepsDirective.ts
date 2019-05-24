import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[c3mStepCurrent]'
})
export class StepsDirective implements OnChanges {
  @Input('c3mStepCurrent') activeStep: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const liElement = this.el.nativeElement;
    if (liElement.getAttribute('aria-current', 'step')) {
      liElement.removeAttribute('aria-current', 'step');
    }

    if (this.activeStep) {
      liElement.setAttribute('aria-current', 'step');
    }
  }
}
