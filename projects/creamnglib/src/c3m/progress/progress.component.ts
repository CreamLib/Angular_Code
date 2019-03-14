import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent implements OnInit {
  // Inputs
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() max: string;
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit() {}
}
