import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ListValue } from './list.model';

@Component({
  selector: 'c3m-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  // Inputs
  @Input() title;
  @Input() values: ListValue[] = [];
}
