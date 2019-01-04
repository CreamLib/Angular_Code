import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastPageComponent } from './toast-page.component';

describe('ToastPageComponent', () => {
  let component: ToastPageComponent;
  let fixture: ComponentFixture<ToastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
