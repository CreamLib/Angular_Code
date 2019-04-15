import { Component, ViewEncapsulation, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'c3m-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {
  @Input() delay = 0;
  @Input() active = false;
  @Input() styleClass = '';
  @Input() position = 'top-right';
  @Input() closeBtn = false;
  @Input() closeBtnTitle = 'close';
  @Input() imgCloseBtn =
    'data:image/png;base64,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';

  @ViewChild('toast') toast: ElementRef;

  positionElt: string;

  constructor() {}

  ngOnInit() {
    // Positioning the toast
    if (this.position === 'bottom-left' || this.position === 'bottom-right') {
      const toastElt = this.toast.nativeElement;
      this.positionElt = '110%';
      toastElt.style.bottom = this.positionElt;
    } else {
      const toastElt = this.toast.nativeElement;
      const HeightElt = toastElt.clientHeight;
      this.positionElt = '-' + (HeightElt + 50) + 'px';
      toastElt.style.top = this.positionElt;
    }
  }

  public toggle() {
    const toastElement = this.toast.nativeElement;
    if (this.position === 'bottom-left' || this.position === 'bottom-right') {
      toastElement.style.bottom = '';
    } else {
      toastElement.style.top = '';
    }
    if (this.active === false) {
      this.active = true;

      // If delay, hide toast after it
      if (this.delay > 0) {
        setTimeout(() => {
          this.closeToast();
        }, this.delay);
      }
    }
  }

  public closeToast() {
    const toastElement = this.toast.nativeElement;
    this.active = false;
    if (this.position === 'bottom-left' || this.position === 'bottom-right') {
      toastElement.style.bottom = this.positionElt;
    } else {
      toastElement.style.top = this.positionElt;
    }
  }
}
