import { Component } from '@angular/core';
import { GuidedWizardService } from './shared/guided-wizard.service';

@Component({
  selector: 'app-guided-wizard',
  templateUrl: './guided-wizard.component.html',
  styleUrls: ['./guided-wizard.component.css'],
})
export class GuidedWizardComponent {
  currentStep = 0;

  constructor(private wizardState: GuidedWizardService) {}

  ngOnInit() {
    this.wizardState.currentStep$.subscribe((step) => {
      console.log('Current step is: ', step); // Debug line
      this.currentStep = step;
    });
  }

  moveToNextStep() {
    // Save or process the collected data
    this.wizardState.moveToStep(1); // Move to the next step
  }
}
