import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioItemComponent } from './radio-item.component';

describe('RadioComponent', () => {
  let component: RadioItemComponent;
  let fixture: ComponentFixture<RadioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
