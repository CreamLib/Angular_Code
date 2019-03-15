import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-step-page',
  templateUrl: './step-page.component.html',
  styleUrls: ['./step-page.component.css']
})
export class StepPageComponent implements OnInit {
  constructor(private app: AppComponent) {}

  ngOnInit() {
    const subComp = ['step-item'];
  }
}
