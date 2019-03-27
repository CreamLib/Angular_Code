import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';

@Component({
  selector: 'c3m-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  @Input()
  isOpen: boolean;
  @Input() styleClass: string;
  @Input() topPosition = 0;
  @Input() leftPosition = 0;
  @Input() modalWidth = 0;
  @Input() modaTitle: string;
  @Input() closeBtnTitle = 'Close dialog';

  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @ViewChild('dialogElement') dialogElement: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChild('focusable') focusable: ElementRef;

  dialogTitle = this.randomID();
  dialogDescription = this.randomID();
  btnCloseLabel = 'Close dialog';
  screenHeight: any;
  screenWidth: any;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
    this.isOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  /* Open Modal */
  ToggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      const eventOpen = this;
      this.onShow.emit(this.dialogElement);
      this.modalPosition();

      // Focus on close button
      const titleModalFocus = this.focusable.nativeElement;
      setTimeout(function() {
        titleModalFocus.focus();
      }, 500);
    } else if (this.isOpen) {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
    }
  }

  modalPosition() {
    if (this.screenWidth > 768) {
      if (this.topPosition > 0) {
        this.container.nativeElement.style.top = this.topPosition + 'px';
      } else {
        this.container.nativeElement.style.top = '40%';
      }

      if (this.leftPosition > 0) {
        const widthModal = 100 - this.leftPosition * 2;
        this.container.nativeElement.style.width = widthModal + '%';
        this.container.nativeElement.style.left = this.leftPosition + '%';
      } else if (this.modalWidth > 0) {
        const leftPositionModal = (this.screenWidth - this.modalWidth) / 2;
        this.container.nativeElement.style.left = leftPositionModal + 'px';
        this.container.nativeElement.style.width = this.modalWidth + 'px';
      } else {
        this.container.nativeElement.style.width = '50%';
        this.container.nativeElement.style.left = '25%';
      }
    } else {
      this.container.nativeElement.style.left = '5%';
      this.container.nativeElement.style.width = '90%';
    }
  }

  onKey(event) {
    if (event.key === 'Escape') {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
    }
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
