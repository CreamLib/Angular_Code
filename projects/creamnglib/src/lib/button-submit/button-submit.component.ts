import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'c3m-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonSubmitComponent {

  constructor() { }

  /* Input Submit value */
  @Input() inputValue: string;
}
