import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsPageComponent } from './breadcrumbs-page.component';

describe('BreadcrumbsPageComponent', () => {
  let component: BreadcrumbsPageComponent;
  let fixture: ComponentFixture<BreadcrumbsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
