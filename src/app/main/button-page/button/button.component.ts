import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
  selector: 'c3m-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  constructor(private elementRef: ElementRef) {}

  /* OnClick Event */
  public OnClick() {
    /* Alert that display ClassName */
    alert('My Class is : ' + this.elementRef.nativeElement.className);
  }

}
