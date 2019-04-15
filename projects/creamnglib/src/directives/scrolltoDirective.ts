import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[c3mScrollTo]'
})
export class ScrolltoDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  onClick(elt) {
    const target = elt.target;
    const classToFocus = target.classList[0];
    const eltToFocus = document.getElementById(classToFocus);
    if (eltToFocus) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(eltToFocus.tagName)) {
        eltToFocus.tabIndex = -1;
      }
      eltToFocus.focus();
    }
  }
}
