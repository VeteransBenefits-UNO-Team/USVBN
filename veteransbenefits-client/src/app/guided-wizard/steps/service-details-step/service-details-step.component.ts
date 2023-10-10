import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GuidedWizardService } from '../../shared/guided-wizard.service';

@Component({
  selector: 'app-service-details-step',
  templateUrl: './service-details-step.component.html',
  styleUrls: ['./service-details-step.component.scss'],
})
export class ServiceDetailsStepComponent {
  serviceDetailsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private wizardState: GuidedWizardService
  ) {
    this.serviceDetailsForm = this.fb.group({
      yearsOfService: [''],
      branch: [''],
      roles: [''],
      status: [''], // Active, Reserve, Retired, etc.
      // ... more fields
    });
  }

  moveToNextStep() {
    // Logic to save this data
    this.wizardState.moveToStep(1); // Move to the next step
  }
}
