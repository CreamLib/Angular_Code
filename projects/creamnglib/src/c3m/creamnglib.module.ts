import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputMailComponent } from './input-mail/input-mail.component';
import { InputErrorMsgComponent } from './input-error-msg/input-error-msg.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxButtonComponent } from './checkbox-button/checkbox-button.component';
import { CheckboxLinkComponent } from './checkbox-link/checkbox-link.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxGroupItemComponent } from './checkbox-group/checkbox-group-item/checkbox-group-item.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { ListComponent } from './list/list.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ListThumbnailsComponent } from './list-thumbnails/list-thumbnails.component';
import { ListDescriptionComponent } from './list-description/list-description.component';
import { ModalComponent } from './modal/modal.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { RadioComponent } from './radio/radio.component';
import { RadioItemComponent } from './radio/radio-item/radio-item.component';
import { SelectComponent } from './select/select.component';
import { SelectDatalistComponent } from './select-datalist/select-datalist.component';
import { SelectDatalistsComponent } from './select-datalists/select-datalists.component';
import { SkipComponent } from './skip/skip.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnerProgressComponent } from './spinner-progress/spinner-progress.component';
import { StepComponent } from './step/step.component';
import { StepItemComponent } from './step/step-item/step-item.component';
import { ColumnTableComponent } from './table/table.component';
import { ToggleTableComponent } from './table-toggle/table-toggle.component';
import { PageSwipeTableComponent } from './table-swipe/table-swipe.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tabs-item/tabs-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pagination/pager.service';
import { ButtonLinkComponent } from './button-link/button-link.component';

import { ModalDirective } from '../directives/modalDirective';
import { PaginationDirective } from '../directives/paginationDirective';
import { StepsDirective } from '../directives/stepsDirective';
import { ScrolltoDirective } from '../directives/scrolltoDirective';

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
    InputUrlComponent,
    InputPasswordComponent,
    InputMailComponent,
    InputErrorMsgComponent,
    AccordionComponent,
    AccordionItemComponent,
    CalendarComponent,
    CheckboxComponent,
    CheckboxButtonComponent,
    CheckboxLinkComponent,
    CheckboxGroupComponent,
    CheckboxGroupItemComponent,
    DropdownComponent,
    DropdownItemComponent,
    FieldsetComponent,
    ListComponent,
    ListOrderComponent,
    ListThumbnailsComponent,
    ListDescriptionComponent,
    ModalComponent,
    ModalAlertComponent,
    RadioComponent,
    RadioItemComponent,
    SelectComponent,
    SelectDatalistComponent,
    SelectDatalistsComponent,
    SkipComponent,
    SliderComponent,
    ProgressComponent,
    SpinnerProgressComponent,
    StepComponent,
    StepItemComponent,
    ColumnTableComponent,
    ToggleTableComponent,
    PageSwipeTableComponent,
    TabsComponent,
    TabComponent,
    PaginationComponent,
    ButtonLinkComponent,
    ModalDirective,
    PaginationDirective,
    StepsDirective,
    ScrolltoDirective
  ],
  imports: [BrowserModule, RouterModule],
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
    InputUrlComponent,
    InputPasswordComponent,
    InputMailComponent,
    InputErrorMsgComponent,
    AccordionComponent,
    AccordionItemComponent,
    CalendarComponent,
    CheckboxComponent,
    CheckboxButtonComponent,
    CheckboxLinkComponent,
    CheckboxGroupComponent,
    CheckboxGroupItemComponent,
    DropdownComponent,
    DropdownItemComponent,
    FieldsetComponent,
    ListComponent,
    ListOrderComponent,
    ListThumbnailsComponent,
    ListDescriptionComponent,
    ModalComponent,
    ModalAlertComponent,
    RadioComponent,
    RadioItemComponent,
    SelectComponent,
    SelectDatalistComponent,
    SelectDatalistsComponent,
    SkipComponent,
    SliderComponent,
    ProgressComponent,
    SpinnerProgressComponent,
    StepComponent,
    StepItemComponent,
    ColumnTableComponent,
    ToggleTableComponent,
    PageSwipeTableComponent,
    TabsComponent,
    TabComponent,
    PaginationComponent,
    ButtonLinkComponent,
    RouterModule,
    ModalDirective,
    PaginationDirective,
    StepsDirective,
    ScrolltoDirective
  ],
  providers: [PagerService]
})
export class CreamnglibModule {}
