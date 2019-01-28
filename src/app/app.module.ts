import { HttpModule } from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { LottieAnimationViewModule } from 'ng-lottie';
import { BreadcrumbsModule } from './module-breadcrumbs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './main/tabs-page/tabs/tabs.component';
import { TabComponent } from './main/tabs-page/tabs/tabs-item/tabs-item.component';
import { ButtonPageComponent } from './main/button-page/button-page.component';
import { TabsPageComponent } from './main/tabs-page/tabs-page.component';
import { AccordionPageComponent } from './main/accordion-page/accordion-page.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuItemComponent } from './header/menu/menu-item/menu-item.component';
import { CarouselPageComponent } from './main/carousel-page/carousel-page.component';
import { ModalPageComponent } from './main/modal-page/modal-page.component';
import { TablePageComponent } from './main/table-page/table-page.component';
import { PaginationPageComponent } from './main/pagination-page/pagination-page.component';
import { PaginationComponent } from './main/pagination-page/pagination/pagination.component';
import { PagerService } from './main/pagination-page/pagination/pager.service';
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
import { NavbarPageComponent } from './main/navbar-page/navbar-page.component';
import { ListPageComponent } from './main/list-page/list-page.component';
import { SkipPageComponent } from './main/skip-page/skip-page.component';
import { ToastPageComponent } from './main/toast-page/toast-page.component';
import { BottomPageComponent } from './main/bottom-page/bottom-page.component';
import { BottomComponent } from './main/bottom-page/bottom/bottom.component';
import { RadioPageComponent } from './main/radio-page/radio-page.component';
import { CreamnglibModule } from 'creamnglib';
import { appRoutes } from './app.routes';
import { CardPageComponent } from './main/card-page/card-page.component';
import { CardComponent } from './main/card-page/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccueilComponent,
    TabsComponent,
    TabComponent,
    ButtonPageComponent,
    TabsPageComponent,
    AccordionPageComponent,
    MenuComponent,
    MenuItemComponent,
    CarouselPageComponent,
    ModalPageComponent,
    TablePageComponent,
    PaginationPageComponent,
    PaginationComponent,
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
    NavbarPageComponent,
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
    RouterModule.forRoot(appRoutes, { useHash: true }),
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
