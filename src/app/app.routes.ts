import { Routes, ExtraOptions } from '@angular/router';
import { AccueilComponent } from './main/accueil/accueil.component';
import { ButtonPageComponent } from './main/button-page/button-page.component';
import { TabsPageComponent } from './main/tabs-page/tabs-page.component';
import { AccordionPageComponent } from './main/accordion-page/accordion-page.component';
import { ModalPageComponent } from './main/modal-page/modal-page.component';
import { CarouselPageComponent } from './main/carousel-page/carousel-page.component';
import { PaginationPageComponent } from './main/pagination-page/pagination-page.component';
import { SliderPageComponent } from './main/slider-page/slider-page.component';
import { GettingStartedComponent } from './main/getting-started/getting-started.component';
import { FaqComponent } from './main/faq/faq.component';
import { StepPageComponent } from './main/step-page/step-page.component';
import { CalendarPageComponent } from './main/calendar-page/calendar-page.component';
import { DropdownPageComponent } from './main/dropdown-page/dropdown-page.component';
import { InputPageComponent } from './main/input-page/input-page.component';
import { CheckboxPageComponent } from './main/checkbox-page/checkbox-page.component';
import { RadioPageComponent } from './main/radio-page/radio-page.component';
import { SelectPageComponent } from './main/select-page/select-page.component';
import { FieldsetPageComponent } from './main/fieldset-page/fieldset-page.component';
import { SkipPageComponent } from './main/skip-page/skip-page.component';
import { ToastPageComponent } from './main/toast-page/toast-page.component';
import { ListPageComponent } from './main/list-page/list-page.component';
import { BottomPageComponent } from './main/bottom-page/bottom-page.component';
import { BreadcrumbsPageComponent } from './main/breadcrumbs-page/breadcrumbs-page.component';

export const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled'
};

export const appRoutes: Routes = [
  { path: 'home', component: AccueilComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'button',
    component: ButtonPageComponent,
    data: { breadcrumb: 'Button' }
  },
  { path: 'tabs', component: TabsPageComponent, data: { breadcrumb: 'Tabs' } },
  {
    path: 'accordion',
    component: AccordionPageComponent,
    data: { breadcrumb: 'Accordion' }
  },
  {
    path: 'modal',
    component: ModalPageComponent,
    data: { breadcrumb: 'modal' }
  },
  {
    path: 'carousel',
    component: CarouselPageComponent,
    data: { breadcrumb: 'carousel' }
  },
  {
    path: 'pagination',
    component: PaginationPageComponent,
    data: { breadcrumb: 'pagination' }
  },
  {
    path: 'slider',
    component: SliderPageComponent,
    data: { breadcrumb: 'slider' }
  },
  {
    path: 'gettingStarted',
    component: GettingStartedComponent,
    data: { breadcrumb: 'GettingStarted' }
  },
  { path: 'faq', component: FaqComponent, data: { breadcrumb: 'F.A.Q' } },
  { path: 'step', component: StepPageComponent, data: { breadcrumb: 'Step' } },
  {
    path: 'calendar',
    component: CalendarPageComponent,
    data: { breadcrumb: 'Calendar' }
  },
  {
    path: 'dropdown',
    component: DropdownPageComponent,
    data: { breadcrumb: 'Dropdown' }
  },
  {
    path: 'input',
    component: InputPageComponent,
    data: { breadcrumb: 'Input' }
  },
  {
    path: 'checkbox',
    component: CheckboxPageComponent,
    data: { breadcrumb: 'Checkbox' }
  },
  {
    path: 'radio',
    component: RadioPageComponent,
    data: { breadcrumb: 'Radios' }
  },
  {
    path: 'select',
    component: SelectPageComponent,
    data: { breadcrumb: 'select' }
  },
  {
    path: 'fieldset',
    component: FieldsetPageComponent,
    data: { breadcrumb: 'fieldset' }
  },
  { path: 'skip', component: SkipPageComponent, data: { breadcrumb: 'skip' } },
  {
    path: 'toast',
    component: ToastPageComponent,
    data: { breadcrumb: 'toast' }
  },
  { path: 'list', component: ListPageComponent, data: { breadcrumb: 'list' } },
  {
    path: 'bottom',
    component: BottomPageComponent,
    data: { breadcrumb: 'Bottom' }
  },
  {
    path: 'breadcrumbs',
    component: BreadcrumbsPageComponent,
    data: { breadcrumb: 'Breadcrumbs' }
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
  //  { path: '**', component: PageNotFoundComponent }
];
