import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
})
export class PersonalInfoStepComponent implements OnInit {
  personalInfoForm!: FormGroup;

  genders = ['Male', 'Female', 'Other'];
  residentialStatuses = ['Own', 'Rent'];
  maritalStatuses = ['Single', 'Married', 'Widowed', 'Divorced', 'Separated'];
  ethnicities = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Hispanic or Latino',
    'Native Hawaiian or Other Pacific Islander',
    'White',
    'Prefer not to say',
  ];
  relationships = ['Spouse', 'Child', 'Parent'];
  languages = ['English', 'Spanish', 'French', 'German', 'Other'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''], // Validators are not required if field is optional
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
      // Dependent information will require special handling, especially if multiple dependents can be added
      emergencyContactName: ['', Validators.required],
      emergencyContactRelationship: ['', Validators.required],
      emergencyContactPhone: ['', Validators.required],
      emergencyContactEmail: [''],
      maritalStatus: ['', Validators.required],
      ethnicity: [''],
      preferredLanguage: ['', Validators.required],
      // Add other form controls as necessary
    });
  }

  moveToNextStep() {
    if (this.personalInfoForm.valid) {
      // Handle valid form submission here
      console.log(this.personalInfoForm.value);
      // You would typically handle form submission to a backend service here
    } else {
      // Handle the error state here
      console.log('Form is not valid');
    }
  }
}
