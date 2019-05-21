import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ListValue } from '../list/list.model';

@Component({
  selector: 'c3m-list-thumbnails',
  templateUrl: './list-thumbnails.component.html',
  styleUrls: ['./list-thumbnails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListThumbnailsComponent {
  // Inputs
  @Input() title;
  @Input() values: ListValue[];
}
