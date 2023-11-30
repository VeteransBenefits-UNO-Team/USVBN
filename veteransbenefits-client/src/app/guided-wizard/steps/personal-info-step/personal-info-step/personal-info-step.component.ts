import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { GuidedWizardComponent } from 'src/app/guided-wizard/guided-wizard.component';
import { GuidedWizardService } from 'src/app/guided-wizard/shared/guided-wizard.service';
import { PersonalInfo } from 'src/app/guided-wizard/shared/models/personal-info.model';
import { StepperValueService } from 'src/app/guided-wizard/shared/stepper-value.service';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
})
export class PersonalInfoStepComponent implements OnInit, OnDestroy {
  personalInfoForm!: FormGroup;

  genders: string[] = [];
  residentialStatuses: string[] = [];
  maritalStatuses: string[] = [];
  ethnicities: string[] = [];
  relationships: string[] = [];
  languages: string[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private stepperValueService: StepperValueService,
    private formBuilder: FormBuilder,
    private guidedWizardService: GuidedWizardService,
    private guidedWizardComponenet: GuidedWizardComponent
  ) {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      suffix: [''],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      primaryPhone: ['', Validators.required],
      secondaryPhone: [''],
      email: ['', [Validators.required, Validators.email]],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      residentialStatus: ['', Validators.required],
      emergencyContactName: ['', Validators.required],
      emergencyContactRelationship: ['', Validators.required],
      emergencyContactPhone: ['', Validators.required],
      emergencyContactEmail: [''],
      maritalStatus: ['', Validators.required],
      ethnicity: [''],
      language: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.stepperValueService
      .getAllPersonalInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe((personalInfo: PersonalInfo) => {
        if (personalInfo) {
          this.genders = personalInfo.genders;
          this.residentialStatuses = personalInfo.residentialStatuses;
          this.maritalStatuses = personalInfo.maritalStatuses;
          this.ethnicities = personalInfo.ethnicities;
          this.relationships = personalInfo.relationships;
          this.languages = personalInfo.languages;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onGenderSelect(event: any): void {
    const gender = event.value;
  }

  onResidentialStatusSelect(event: any): void {
    const residentialStatus = event.value;
  }

  onMaritalStatusSelect(event: any): void {
    const maritalStatus = event.value;
  }

  onEthnicitySelect(event: any): void {
    const ethnicity = event.value;
  }

  onLanguageSelect(event: any): void {
    const language = event.value;
  }

  moveToNextStep(): void {
    if (this.personalInfoForm.valid) {
      this.guidedWizardService.moveToStep(2);
    } else {
      console.error('Form is not valid');
    }
  }

  submitForm(): void {
    this.guidedWizardService.setPersonalInfoData(this.personalInfoForm.value);
    this.guidedWizardComponenet.submitForm();
  }
}
