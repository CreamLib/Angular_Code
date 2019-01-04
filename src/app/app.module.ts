import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { ScrollToModule } from "ng2-scroll-to";
import { LottieAnimationViewModule } from "ng-lottie";
import { BreadcrumbsModule } from "./module-breadcrumbs";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { AccueilComponent } from "./main/accueil/accueil.component";
import { AccordionComponent } from "./main/accordion-page/accordion/accordion.component";
import { AccordionItemComponent } from "./main/accordion-page/accordion/accordion-item/accordion-item.component";
import { RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./main/tabs-page/tabs/tabs.component";
import { TabComponent } from "./main/tabs-page/tabs/tabs-item/tabs-item.component";
import { ButtonPageComponent } from "./main/button-page/button-page.component";
import { TabsPageComponent } from "./main/tabs-page/tabs-page.component";
import { AccordionPageComponent } from "./main/accordion-page/accordion-page.component";
import { MenuComponent } from "./header/menu/menu.component";
import { MenuItemComponent } from "./header/menu/menu-item/menu-item.component";
import { CarouselPageComponent } from "./main/carousel-page/carousel-page.component";
import { ModalPageComponent } from "./main/modal-page/modal-page.component";
import { ModalComponent } from "./main/modal-page/modal/modal.component";
import { ModalAlertComponent } from "./main/modal-page/modal-alert/modal-alert.component";
import { CarouselComponent } from "./main/carousel-page/carousel/carousel.component";
import { CarouselItemComponent } from "./main/carousel-page/carousel/carousel-item/carousel-item.component";
import { TablePageComponent } from "./main/table-page/table-page.component";
import { ColumnTableComponent } from "./main/table-page/table/table.component";
import { ToggleTableComponent } from "./main/table-page/table-toggle/table-toggle.component";
import { PageSwipeTableComponent } from "./main/table-page/table-swipe/table-swipe.component";
import { PaginationPageComponent } from "./main/pagination-page/pagination-page.component";
import { PaginationComponent } from "./main/pagination-page/pagination/pagination.component";
import { PagerService } from "./main/pagination-page/pagination/pager.service";
import { SliderPageComponent } from "./main/slider-page/slider-page.component";
import { SliderComponent } from "./main/slider-page/slider/slider.component";
import { GettingStartedComponent } from "./main/getting-started/getting-started.component";
import { StepPageComponent } from "./main/step-page/step-page.component";
import { StepComponent } from "./main/step-page/step/step.component";
import { StepItemComponent } from "./main/step-page/step/step-item/step-item.component";
import { CalendarPageComponent } from "./main/calendar-page/calendar-page.component";
import { CalendarComponent } from "./main/calendar-page/calendar/calendar.component";
import { DropdownPageComponent } from "./main/dropdown-page/dropdown-page.component";
import { DropdownComponent } from "./main/dropdown-page/dropdown/dropdown.component";
import { DropdownItemComponent } from "./main/dropdown-page/dropdown/dropdown-item/dropdown-item.component";
import { InputPageComponent } from "./main/input-page/input-page.component";
import { InputComponent } from "./main/input-page/input/input.component";
import { InputFloatingComponent } from "./main/input-page/input-floating/input-floating.component";
import { InputMaterialComponent } from "./main/input-page/input-material/input-material.component";
import { CheckboxPageComponent } from "./main/checkbox-page/checkbox-page.component";
import { CheckboxComponent } from "./main/checkbox-page/checkbox/checkbox.component";
import { CheckboxGroupComponent } from "./main/checkbox-page/checkbox-group/checkbox-group.component";
import { CheckboxButtonComponent } from "./main/checkbox-page/checkbox-button/checkbox-button.component";
import { SelectPageComponent } from "./main/select-page/select-page.component";
import { SelectComponent } from "./main/select-page/select/select.component";
import { SelectDatalistComponent } from "./main/select-page/select-datalist/select-datalist.component";
import { SelectDatalistsComponent } from "./main/select-page/select-datalists/select-datalists.component";
import { FaqComponent } from "./main/faq/faq.component";
import { InputTelComponent } from "./main/input-page/input-tel/input-tel.component";
import { InputMailComponent } from "./main/input-page/input-mail/input-mail.component";
import { InputErrorMsgComponent } from "./main/input-page/input-error-msg/input-error-msg.component";
import { BreadcrumbsPageComponent } from "./main/breadcrumbs-page/breadcrumbs-page.component";
import { FieldsetPageComponent } from "./main/fieldset-page/fieldset-page.component";
import { NavbarPageComponent } from "./main/navbar-page/navbar-page.component";
import { ListPageComponent } from "./main/list-page/list-page.component";
import { SkipPageComponent } from "./main/skip-page/skip-page.component";
import { FieldsetComponent } from "./main/fieldset-page/fieldset/fieldset.component";
import { SkipComponent } from "./main/skip-page/skip/skip.component";
import { ToastPageComponent } from "./main/toast-page/toast-page.component";
import { ToastComponent } from "./main/toast-page/toast/toast.component";
import { ListComponent } from "./main/list-page/list/list.component";
import { ListOrderComponent } from "./main/list-page/list-order/list-order.component";
import { ListThumbnailsComponent } from "./main/list-page/list-thumbnails/list-thumbnails.component";
import { ListDescriptionComponent } from "./main/list-page/list-description/list-description.component";
import { BottomPageComponent } from "./main/bottom-page/bottom-page.component";
import { BottomComponent } from "./main/bottom-page/bottom/bottom.component";
import { RadioPageComponent } from "./main/radio-page/radio-page.component";
import { RadioComponent } from "./main/radio-page/radio/radio.component";
import { RadioItemComponent } from "./main/radio-page/radio/radio-item/radio-item.component";
import { CheckboxGroupItemComponent } from "./main/checkbox-page/checkbox-group/checkbox-group-item/checkbox-group-item.component";
import { CheckboxLinkComponent } from "./main/checkbox-page/checkbox-link/checkbox-link.component";
import { InputSearchComponent } from "./main/input-page/input-search/input-search.component";
import { ProgressComponent } from "./main/slider-page/progress/progress.component";
import { InputUrlComponent } from "./main/input-page/input-url/input-url.component";
import { InputPasswordComponent } from "./main/input-page/input-password/input-password.component";
import { CreamnglibModule } from "creamnglib";

export const appRoutes: Routes = [
  { path: "home", component: AccueilComponent, data: { breadcrumb: "Home" } },
  {
    path: "button",
    component: ButtonPageComponent,
    data: { breadcrumb: "Button" }
  },
  { path: "tabs", component: TabsPageComponent, data: { breadcrumb: "Tabs" } },
  {
    path: "accordion",
    component: AccordionPageComponent,
    data: { breadcrumb: "Accordion" }
  },
  {
    path: "modal",
    component: ModalPageComponent,
    data: { breadcrumb: "modal" }
  },
  {
    path: "carousel",
    component: CarouselPageComponent,
    data: { breadcrumb: "carousel" }
  },
  {
    path: "table",
    component: TablePageComponent,
    data: { breadcrumb: "table" }
  },
  {
    path: "pagination",
    component: PaginationPageComponent,
    data: { breadcrumb: "pagination" }
  },
  {
    path: "slider",
    component: SliderPageComponent,
    data: { breadcrumb: "slider" }
  },
  {
    path: "gettingStarted",
    component: GettingStartedComponent,
    data: { breadcrumb: "GettingStarted" }
  },
  { path: "faq", component: FaqComponent, data: { breadcrumb: "F.A.Q" } },
  { path: "step", component: StepPageComponent, data: { breadcrumb: "Step" } },
  {
    path: "calendar",
    component: CalendarPageComponent,
    data: { breadcrumb: "Calendar" }
  },
  {
    path: "dropdown",
    component: DropdownPageComponent,
    data: { breadcrumb: "Dropdown" }
  },
  {
    path: "input",
    component: InputPageComponent,
    data: { breadcrumb: "Input" }
  },
  {
    path: "checkbox",
    component: CheckboxPageComponent,
    data: { breadcrumb: "Checkbox" }
  },
  {
    path: "radio",
    component: RadioPageComponent,
    data: { breadcrumb: "Radios" }
  },
  {
    path: "select",
    component: SelectPageComponent,
    data: { breadcrumb: "select" }
  },
  {
    path: "fieldset",
    component: FieldsetPageComponent,
    data: { breadcrumb: "fieldset" }
  },
  { path: "skip", component: SkipPageComponent, data: { breadcrumb: "skip" } },
  {
    path: "toast",
    component: ToastPageComponent,
    data: { breadcrumb: "toast" }
  },
  { path: "list", component: ListPageComponent, data: { breadcrumb: "list" } },
  {
    path: "bottom",
    component: BottomPageComponent,
    data: { breadcrumb: "Bottom" }
  },
  {
    path: "breadcrumbs",
    component: BreadcrumbsPageComponent,
    data: { breadcrumb: "Breadcrumbs" }
  },

  { path: "", redirectTo: "/home", pathMatch: "full" }
  //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccueilComponent,
    AccordionComponent,
    AccordionItemComponent,
    TabsComponent,
    TabComponent,
    ButtonPageComponent,
    TabsPageComponent,
    AccordionPageComponent,
    MenuComponent,
    MenuItemComponent,
    CarouselPageComponent,
    ModalPageComponent,
    ModalComponent,
    ModalAlertComponent,
    CarouselComponent,
    CarouselItemComponent,
    TablePageComponent,
    ColumnTableComponent,
    ToggleTableComponent,
    PageSwipeTableComponent,
    PaginationPageComponent,
    PaginationComponent,
    SliderPageComponent,
    SliderComponent,
    GettingStartedComponent,
    StepPageComponent,
    StepComponent,
    StepItemComponent,
    CalendarPageComponent,
    CalendarComponent,
    DropdownPageComponent,
    DropdownComponent,
    DropdownItemComponent,
    InputPageComponent,
    InputComponent,
    InputFloatingComponent,
    InputMaterialComponent,
    CheckboxPageComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    CheckboxButtonComponent,
    SelectPageComponent,
    SelectComponent,
    SelectDatalistComponent,
    SelectDatalistsComponent,
    FaqComponent,
    InputTelComponent,
    InputMailComponent,
    InputErrorMsgComponent,
    BreadcrumbsPageComponent,
    FieldsetPageComponent,
    NavbarPageComponent,
    ListPageComponent,
    SkipPageComponent,
    FieldsetComponent,
    SkipComponent,
    ToastPageComponent,
    ToastComponent,
    ListComponent,
    ListOrderComponent,
    ListThumbnailsComponent,
    ListDescriptionComponent,
    BottomPageComponent,
    BottomComponent,
    RadioPageComponent,
    RadioComponent,
    RadioItemComponent,
    CheckboxGroupItemComponent,
    CheckboxLinkComponent,
    InputSearchComponent,
    ProgressComponent,
    InputUrlComponent,
    InputPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    LottieAnimationViewModule.forRoot(),
    BreadcrumbsModule,
    CreamnglibModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
