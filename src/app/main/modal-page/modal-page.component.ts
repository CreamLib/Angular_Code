import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { AppComponent } from '../../app.component';
import { ModalComponent } from 'creamnglib';

@Component({
  selector: 'c3m-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalPageComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private app: AppComponent) {
  }

  public OpenModal() {
    this.modal.ToggleOpen();
  }

  ngOnInit() {
  }
}
