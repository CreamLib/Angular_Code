import { Component, ViewEncapsulation } from "@angular/core";
import { AppComponent } from "../../app.component";

@Component({
  selector: "app-button-page",
  templateUrl: "./button-page.component.html",
  styleUrls: ["./button-page.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ButtonPageComponent {
  constructor() {}

  alert(msg: string) {
    alert(msg);
  }
}
