import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbnailsComponent } from './list-thumbnails.component';

describe('ListThumbnailsComponent', () => {
  let component: ListThumbnailsComponent;
  let fixture: ComponentFixture<ListThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
