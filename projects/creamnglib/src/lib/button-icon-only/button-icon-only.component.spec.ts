import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconOnlyComponent } from './button-icon-only.component';

describe('ButtonIconOnlyComponent', () => {
  let component: ButtonIconOnlyComponent;
  let fixture: ComponentFixture<ButtonIconOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonIconOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
