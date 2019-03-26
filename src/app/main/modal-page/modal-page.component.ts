import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ModalComponent } from 'creamnglib';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalPageComponent implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent;
  @ViewChild('toast1') toast1;
  @ViewChild('toast2') toast2;

  constructor(private app: AppComponent) {}

  public OpenModal() {
    this.modal.ToggleOpen();
  }

  modalOpened(event) {
    console.log('Event launched when modal is opened :');
    console.log(event);
    this.toast1.toggle();
  }

  modalClosed(event) {
    console.log('Event launched when modal is closed :');
    console.log(event);
    this.toast2.toggle();
  }

  ngOnInit() {}
}
