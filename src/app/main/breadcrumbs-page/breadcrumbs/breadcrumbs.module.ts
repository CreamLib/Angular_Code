import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BreadcrumbsService } from './breadcrumbs.service';

@NgModule({
  declarations: [BreadcrumbsComponent],
  providers: [BreadcrumbsService],
  imports: [RouterModule, BrowserModule, CommonModule],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {
  constructor() {}
}
