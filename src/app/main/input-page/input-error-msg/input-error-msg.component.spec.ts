import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorMsgComponent } from './input-error-msg.component';

describe('InputErrorMsgComponent', () => {
  let component: InputErrorMsgComponent;
  let fixture: ComponentFixture<InputErrorMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
