import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { ButtonFileComponent } from "./button-file/button-file.component";
import { ButtonIconComponent } from "./button-icon/button-icon.component";
import { ButtonIconOnlyComponent } from "./button-icon-only/button-icon-only.component";
import { ButtonSubmitComponent } from "./button-submit/button-submit.component";
import { BrowserModule } from "@angular/platform-browser";
import { ToastComponent } from "./toast/toast.component";

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonFileComponent,
    ButtonIconComponent,
    ButtonIconOnlyComponent,
    ButtonSubmitComponent,
    ToastComponent
  ],
  imports: [BrowserModule],
  exports: [
    ButtonComponent,
    ButtonFileComponent,
    ButtonIconComponent,
    ButtonIconOnlyComponent,
    ButtonSubmitComponent,
    ToastComponent
  ]
})
export class CreamnglibModule {}
