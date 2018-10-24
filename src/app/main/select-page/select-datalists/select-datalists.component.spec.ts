import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDatalistsComponent } from './select-datalists.component';

describe('SelectDatalistsComponent', () => {
  let component: SelectDatalistsComponent;
  let fixture: ComponentFixture<SelectDatalistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDatalistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDatalistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
