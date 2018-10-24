import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDescriptionComponent } from './list-description.component';

describe('ListDescriptionComponent', () => {
  let component: ListDescriptionComponent;
  let fixture: ComponentFixture<ListDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
