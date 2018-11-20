import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxLinkComponent } from './checkbox-link.component';

describe('CheckboxLinkComponent', () => {
  let component: CheckboxLinkComponent;
  let fixture: ComponentFixture<CheckboxLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
