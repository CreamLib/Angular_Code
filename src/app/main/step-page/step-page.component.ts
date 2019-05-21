import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { StepItem } from '../../../../projects/creamnglib/src/public_api';

@Component({
  selector: 'app-step-page',
  templateUrl: './step-page.component.html',
  styleUrls: ['./step-page.component.css']
})
export class StepPageComponent implements OnInit {
  items: StepItem[];
  constructor(private app: AppComponent) {}

  ngOnInit() {
    this.items = [
      { title: 'titre1' },
      { title: 'titre2' },
      { title: 'titre3' },
      { title: 'titre4' },
      { title: 'titre5' }
    ];
  }
}
