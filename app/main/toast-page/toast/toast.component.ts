import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {

  @Input() delay: number;
  @Input() active = false;

  constructor() { }

  public toggle(){
    if(this.active === false)
    {
      this.active = true;
      setTimeout( () => {
        this.active = false;
      }, this.delay);
    }
  }
  ngOnInit() {
  }

}
