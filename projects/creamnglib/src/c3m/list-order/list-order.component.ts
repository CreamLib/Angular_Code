import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ListValue } from '../list/list.model';

@Component({
  selector: 'c3m-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListOrderComponent {
  // Inputs
  @Input() title;
  @Input() values: ListValue[];
}
