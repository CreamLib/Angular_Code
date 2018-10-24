import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGroupButtonComponent } from './checkbox-group-button.component';

describe('CheckboxGroupButtonComponent', () => {
  let component: CheckboxGroupButtonComponent;
  let fixture: ComponentFixture<CheckboxGroupButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxGroupButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
