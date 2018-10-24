import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-input-mail',
  templateUrl: './input-mail.component.html',
  styleUrls: ['./input-mail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputMailComponent implements OnInit {

 // Inputs
 @Input() title;
 @Input() placeholder = '';
 @Input() name;
 @Input() id = '';

 constructor() { }

 ngOnInit() {
 }

}
