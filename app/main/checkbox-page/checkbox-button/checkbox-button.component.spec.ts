import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxButtonComponent } from './checkbox-button.component';

describe('CheckboxButtonComponent', () => {
  let component: CheckboxButtonComponent;
  let fixture: ComponentFixture<CheckboxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
