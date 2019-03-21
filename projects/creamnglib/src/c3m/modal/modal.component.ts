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

  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @ViewChild('dialogElement') dialogElement: ElementRef;
  @ViewChild('container') container: ElementRef;

  dialogTitle = 'dialogTitle';
  dialogDescription = 'dialogDescription';
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
    } else if (this.isOpen) {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
    }
  }

  OnKey(event): void {
    console.log(event);
  }

  modalPosition() {
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
  }
}
