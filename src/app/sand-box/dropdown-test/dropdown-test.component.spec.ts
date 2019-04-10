import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTestComponent } from './dropdown-test.component';

describe('DropdownTestComponent', () => {
  let component: DropdownTestComponent;
  let fixture: ComponentFixture<DropdownTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownTestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
