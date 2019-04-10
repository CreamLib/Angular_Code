import { HttpModule } from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './main/button-page/button-page.component';
import { TabsPageComponent } from './main/tabs-page/tabs-page.component';
import { AccordionPageComponent } from './main/accordion-page/accordion-page.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuItemComponent } from './header/menu/menu-item/menu-item.component';
import { CarouselPageComponent } from './main/carousel-page/carousel-page.component';
import { ModalPageComponent } from './main/modal-page/modal-page.component';
import { TablePageComponent } from './main/table-page/table-page.component';
import { PaginationPageComponent } from './main/pagination-page/pagination-page.component';
import { SliderPageComponent } from './main/slider-page/slider-page.component';
import { GettingStartedComponent } from './main/getting-started/getting-started.component';
import { StepPageComponent } from './main/step-page/step-page.component';
import { CalendarPageComponent } from './main/calendar-page/calendar-page.component';
import { DropdownPageComponent } from './main/dropdown-page/dropdown-page.component';
import { InputPageComponent } from './main/input-page/input-page.component';
import { CheckboxPageComponent } from './main/checkbox-page/checkbox-page.component';
import { SelectPageComponent } from './main/select-page/select-page.component';
import { FaqComponent } from './main/faq/faq.component';
import { BreadcrumbsPageComponent } from './main/breadcrumbs-page/breadcrumbs-page.component';
import { FieldsetPageComponent } from './main/fieldset-page/fieldset-page.component';
import { ListPageComponent } from './main/list-page/list-page.component';
import { SkipPageComponent } from './main/skip-page/skip-page.component';
import { ToastPageComponent } from './main/toast-page/toast-page.component';
import { BottomPageComponent } from './main/bottom-page/bottom-page.component';
import { BottomComponent } from './main/bottom-page/bottom/bottom.component';
import { RadioPageComponent } from './main/radio-page/radio-page.component';
import { appRoutes } from './app.routes';
import { routerOptions } from './app.routes';
import { CardPageComponent } from './main/card-page/card-page.component';
import { CardComponent } from './main/card-page/card/card.component';

import { CreamnglibModule } from 'creamnglib';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccueilComponent,
    ButtonPageComponent,
    TabsPageComponent,
    AccordionPageComponent,
    MenuComponent,
    MenuItemComponent,
    CarouselPageComponent,
    ModalPageComponent,
    TablePageComponent,
    PaginationPageComponent,
    SliderPageComponent,
    GettingStartedComponent,
    StepPageComponent,
    CalendarPageComponent,
    DropdownPageComponent,
    InputPageComponent,
    CheckboxPageComponent,
    SelectPageComponent,
    FaqComponent,
    BreadcrumbsPageComponent,
    FieldsetPageComponent,
    ListPageComponent,
    SkipPageComponent,
    ToastPageComponent,
    BottomPageComponent,
    BottomComponent,
    RadioPageComponent,
    CardPageComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes, routerOptions),
    CreamnglibModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
