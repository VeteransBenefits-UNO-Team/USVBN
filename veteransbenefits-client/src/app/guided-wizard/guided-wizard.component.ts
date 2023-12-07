import { Component } from '@angular/core';
import { GuidedWizardService } from './shared/guided-wizard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guided-wizard',
  templateUrl: './guided-wizard.component.html',
  styleUrls: ['./guided-wizard.component.scss'],
})
export class GuidedWizardComponent {
  currentStep = 0;

  constructor(
    private wizardState: GuidedWizardService,
    private router: Router
    ) {}

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

  submitForm(): void {
    this.wizardState.sendFormData().subscribe(
      response => {
        console.log('Form data successfully submitted', response);
        this.wizardState.setFilledForms(response);
        this.router.navigate(['/filled-forms'])
      },
      error => {
        console.error("Error submitting form data", error)
      }
    )
  }
}
