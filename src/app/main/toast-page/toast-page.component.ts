import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-toast-page',
  templateUrl: './toast-page.component.html',
  styleUrls: ['./toast-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToastPageComponent implements OnInit {

  @ViewChild('toast') toast;

  public openToast(){
    console.log(this.toast);
    this.toast.toggle();
  }

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.app.codeSnippets('');
  }
}
