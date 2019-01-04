import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTableComponent } from './table.component';

describe('ColumnTableComponent', () => {
  let component: ColumnTableComponent;
  let fixture: ComponentFixture<ColumnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
