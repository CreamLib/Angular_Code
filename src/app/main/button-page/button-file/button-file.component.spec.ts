import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFileComponent } from './button-file.component';

describe('ButtonFileComponent', () => {
  let component: ButtonFileComponent;
  let fixture: ComponentFixture<ButtonFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
