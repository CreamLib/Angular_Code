import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandBoxPageComponent } from './sand-box-page.component';

describe('SandBoxPageComponent', () => {
  let component: SandBoxPageComponent;
  let fixture: ComponentFixture<SandBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SandBoxPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
