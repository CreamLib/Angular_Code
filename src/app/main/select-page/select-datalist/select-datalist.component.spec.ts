import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDatalistComponent } from './select-datalist.component';

describe('SelectDatalistComponent', () => {
  let component: SelectDatalistComponent;
  let fixture: ComponentFixture<SelectDatalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDatalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
