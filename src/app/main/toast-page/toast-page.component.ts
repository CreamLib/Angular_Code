import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

@Component({
  selector: "c3m-toast-page",
  templateUrl: "./toast-page.component.html",
  styleUrls: ["./toast-page.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ToastPageComponent {
  @ViewChild("toast") toast;

  public openToast() {
    this.toast.toggle();
  }

  constructor() {}
}
