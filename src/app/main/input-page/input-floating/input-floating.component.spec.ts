import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFloatingComponent } from './input-floating.component';

describe('InputFloatingComponent', () => {
  let component: InputFloatingComponent;
  let fixture: ComponentFixture<InputFloatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFloatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
