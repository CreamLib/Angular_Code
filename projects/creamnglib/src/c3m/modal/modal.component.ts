import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'c3m-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean;

  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @ViewChild('dialogElement') dialogElement: ElementRef;

  dialogTitle = 'dialogTitle';
  dialogDescription = 'dialogDescription';
  btnCloseLabel = 'Close dialog';

  ngOnInit() {
    this.isOpen = false;
  }

  /* Open Modal */
  ToggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      const eventOpen = this;
      this.onShow.emit(this.dialogElement);
    } else if (this.isOpen) {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
    }
  }

  OnKey(event): void {
    console.log(event);
  }
}
