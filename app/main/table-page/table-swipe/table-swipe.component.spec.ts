import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSwipeTableComponent } from './page-swipe-table.component';

describe('PageSwipeTableComponent', () => {
  let component: PageSwipeTableComponent;
  let fixture: ComponentFixture<PageSwipeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSwipeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSwipeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
