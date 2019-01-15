import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'c3m-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {


  @Input() isOpen: boolean;
  dialogTitle = 'dialogTitle';
  dialogDescription = 'dialogDescription';
  btnCloseLabel = 'Fermer la fenêtre de dialogue';

  ngOnInit() {
    this.isOpen = false;
  }

    /* Open Modal */
    ToggleOpen(): void {
        if (!this.isOpen) {
            this.isOpen = true;

        } else if (this.isOpen) {
            this.isOpen = false;
        }
    }

    OnKey(event): void {
        console.log(event);
    }
}
