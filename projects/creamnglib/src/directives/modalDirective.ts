import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[c3mModalOut]'
})
export class ModalDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    const map = {};
    let oldElementFocused;
    const containerModal = this.el.nativeElement;
    this.el.nativeElement.onkeydown = this.el.nativeElement.onkeyup = function(e) {
      const elementFocused = <HTMLElement>e.target;
      const typeElementFocused = elementFocused;

      const nbChild = containerModal.childElementCount;
      const lastChildElt = containerModal.childNodes[nbChild - 1];
      const firstChildElt = containerModal.childNodes[0];

      e = e || event; // to deal with IE

      map[e.keyCode] = e.type === 'keydown';

      if (map[16] && map[9]) {
        // Test if we try to focus ahead of modal title
        if (oldElementFocused.nodeName === 'H1') {
          lastChildElt.focus();
          e.preventDefault();
        }
      } else if (map[9] && !map[16]) {
        // Test if we try to focus after close button
        if (oldElementFocused.nodeName === 'BUTTON' && oldElementFocused.className === 'dialog-close') {
          firstChildElt.focus();
          e.preventDefault();
        }
      }
      oldElementFocused = typeElementFocused;
    };
  }
}
