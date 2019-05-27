import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() styleClass: string;
  constructor() {}
}
