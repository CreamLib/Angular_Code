import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetPageComponent } from './fieldset-page.component';

describe('FieldsetPageComponent', () => {
  let component: FieldsetPageComponent;
  let fixture: ComponentFixture<FieldsetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
