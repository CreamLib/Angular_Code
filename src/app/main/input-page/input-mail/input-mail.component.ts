import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-mail',
  templateUrl: './input-mail.component.html',
  styleUrls: ['./input-mail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputMailComponent implements OnInit {

 // Inputs
 @Input() id = '';
 @Input() name = '';
 @Input() value = '';
 @Input() autocomplete = 'on';
 @Input() maxlength = '';
 @Input() multiple: boolean;
 @Input() required: boolean;
 @Input() disabled: boolean;
 @Input() placeholder = '';

 constructor() { }

 ngOnInit() {
 }

}
