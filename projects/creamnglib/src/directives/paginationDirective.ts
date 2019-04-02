import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[c3mPaginationCurrent]'
})
export class PaginationDirective implements OnInit {
  @Input('c3mPaginationCurrent') pager: boolean;
  liElement;
  buttonElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.liElement = this.el.nativeElement;
    if (this.pager === true) {
      this.liElement.childNodes[0].setAttribute('aria-current', 'page');
    }
  }
}
