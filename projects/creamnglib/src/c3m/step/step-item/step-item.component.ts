import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StepComponent } from '../step.component';

@Component({
  selector: 'c3m-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.css']
})
export class StepItemComponent implements AfterViewInit {
  /* List of Step items */
  @ViewChild('items') itemRef: ElementRef;

  /* INPUTS */
  @Input() title;
  @Input() isActive = false;
  @Input() isPassed = false;
  @Input() stepLink = '';
  @Input() indexStep: number;
  @Input() reference: ElementRef;

  /* INPUT "PAST" AND GETTERS / SETTERS */
  _past: boolean;
  @Input('isPast')
  set Past(value: boolean) {
    this._past = value;
    this.cdr.detectChanges();
  }
  get Past() {
    return this._past;
  }

  /* INPUT "FUTURE" AND GETTERS / SETTERS */
  _future: boolean;
  @Input('isFuture')
  set Future(value: boolean) {
    this._future = value;
    this.cdr.detectChanges();
  }
  get Future() {
    return this._future;
  }

  /* CONSTRUCTOR */
  constructor(step: StepComponent, private cdr: ChangeDetectorRef) {
    step.addTab(this); // Add item on Items Tab
  }

  ngAfterViewInit() {
    this.reference = this.itemRef;
  }
}
