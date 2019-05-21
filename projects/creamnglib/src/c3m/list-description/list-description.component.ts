import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ListValue } from '../../public_api';

@Component({
  selector: 'c3m-list-description',
  templateUrl: './list-description.component.html',
  styleUrls: ['./list-description.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListDescriptionComponent {
  // Inputs
  @Input() title;
  @Input() values: ListValue[];
}
