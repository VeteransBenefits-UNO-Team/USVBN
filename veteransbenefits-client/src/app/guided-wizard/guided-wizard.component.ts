import { Component } from '@angular/core';
import { GuidedWizardService } from './guided-wizard.service';

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
      this.currentStep = step;
    });
  }
}
