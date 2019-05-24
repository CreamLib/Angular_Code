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
      { title: 'titre1', stepLink: '/1' },
      { title: 'titre2', stepLink: '/2' },
      { title: 'titre3', stepLink: '/3' },
      { title: 'titre4', stepLink: '/4' },
      { title: 'titre5', stepLink: '/5' }
    ];
  }

  changeStep(s: StepComponent): void {
    s.newStep();
  }
}
