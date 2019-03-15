import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-checkbox-link',
  templateUrl: './checkbox-link.component.html',
  styleUrls: ['./checkbox-link.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxLinkComponent implements OnInit {
  // Inputs
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;

  constructor() {}

  ngOnInit() {}
}
