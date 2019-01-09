import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ButtonFileComponent } from './button-file/button-file.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { ButtonIconOnlyComponent } from './button-icon-only/button-icon-only.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToastComponent } from './toast/toast.component';
import { InputComponent } from './input/input.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { InputFloatingComponent } from './input-floating/input-floating.component';
import { InputMaterialComponent } from './input-material/input-material.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { InputTelComponent } from './input-tel/input-tel.component';
import { InputUrlComponent } from './input-url/input-url.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonFileComponent,
    ButtonIconComponent,
    ButtonIconOnlyComponent,
    ButtonSubmitComponent,
    ToastComponent,
    InputComponent,
    CarouselComponent,
    CarouselItemComponent,
    InputFloatingComponent,
    InputMaterialComponent,
    InputSearchComponent,
    InputTelComponent,
    InputUrlComponent
  ],
  imports: [BrowserModule],
  exports: [
    ButtonComponent,
    ButtonFileComponent,
    ButtonIconComponent,
    ButtonIconOnlyComponent,
    ButtonSubmitComponent,
    ToastComponent,
    InputComponent,
    CarouselComponent,
    CarouselItemComponent,
    InputFloatingComponent,
    InputMaterialComponent,
    InputSearchComponent,
    InputTelComponent,
    InputUrlComponent
  ]
})
export class CreamnglibModule {}
