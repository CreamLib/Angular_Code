import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipPageComponent } from './skip-page.component';

describe('SkipPageComponent', () => {
  let component: SkipPageComponent;
  let fixture: ComponentFixture<SkipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
