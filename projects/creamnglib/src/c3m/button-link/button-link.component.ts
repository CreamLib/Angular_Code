import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonLinkComponent implements OnInit {
  constructor() {}

  @Input() url: string;
  @Input() linkText: string;

  ngOnInit() {}
}
