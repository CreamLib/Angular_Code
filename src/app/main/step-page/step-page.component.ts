import { Component } from '@angular/core';
import { StepItem, StepComponent } from '../../../../projects/creamnglib/src/public_api';

@Component({
  selector: 'app-step-page',
  templateUrl: './step-page.component.html',
  styleUrls: ['./step-page.component.css']
})
export class StepPageComponent {
  items: StepItem[];

  constructor() {
    this.items = [
      { title: 'titre1' },
      { title: 'titre2' },
      { title: 'titre3' },
      { title: 'titre4' },
      { title: 'titre5' }
    ];
  }

  changeStep(s: StepComponent): void {
    s.newStep();
  }
}
