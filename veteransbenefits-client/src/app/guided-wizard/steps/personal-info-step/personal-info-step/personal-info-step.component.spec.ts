import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GuidedWizardService } from 'src/app/guided-wizard/shared/guided-wizard.service';

describe('PersonalInfoStepComponent', () => {
  let component: PersonalInfoStepComponent;
  let fixture: ComponentFixture<PersonalInfoStepComponent>;
  let guidedWizardServiceSpy: jasmine.SpyObj<GuidedWizardService>;

  beforeEach(() => {
    guidedWizardServiceSpy = jasmine.createSpyObj('GuidedWizardService', [
      'moveToStep',
    ]);

    TestBed.configureTestingModule({
      declarations: [PersonalInfoStepComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: GuidedWizardService, useValue: guidedWizardServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(PersonalInfoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('moveToNextStep', () => {
    it('should call wizardService.moveToStep if personalInfoForm is valid', () => {
      // Arrange
      component.personalInfoForm.setValue({
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        suffix: '',
        birthMonth: '01',
        birthDay: '01',
        birthYear: '2000',
        gender: 'Male',
        primaryPhoneNumber: '123-456-7890',
        secondaryPhoneNumber: '',
        emailAddress: 'john.doe@example.com',
        streetAddress: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
        country: 'USA',
        residentialStatus: 'Own',
        dependentRelationship: '',
        dependentFullName: '',
        dependentBirthDate: '',
        dependentEducationStatus: '',
        dependentMarriageDate: '',
        emergencyContactFullName: 'Jane Doe',
        emergencyContactRelationship: 'Spouse',
        emergencyContactPhoneNumber: '123-456-7890',
        emergencyContactEmail: 'jane.doe@example.com',
        emergencyContactAddress: '456 Oak St',
        proofOfIdentity: 'Passport',
        maritalStatus: 'Married',
        ethnicityRace: 'Option1',
        languagePreference: 'English',
      });

      // Act
      component.moveToNextStep();

      // Assert
      expect(guidedWizardServiceSpy.moveToStep).toHaveBeenCalledWith(1);
    });

    it('should not call wizardService.moveToStep if personalInfoForm is invalid', () => {
      // Arrange
      component.personalInfoForm.setValue({
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        birthMonth: '',
        birthDay: '',
        birthYear: '',
        gender: '',
        primaryPhoneNumber: '',
        secondaryPhoneNumber: '',
        emailAddress: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        residentialStatus: '',
        dependentRelationship: '',
        dependentFullName: '',
        dependentBirthDate: '',
        dependentEducationStatus: '',
        dependentMarriageDate: '',
        emergencyContactFullName: '',
        emergencyContactRelationship: '',
        emergencyContactPhoneNumber: '',
        emergencyContactEmail: '',
        emergencyContactAddress: '',
        proofOfIdentity: '',
        maritalStatus: '',
        ethnicityRace: '',
        languagePreference: '',
      });

      // Act
      component.moveToNextStep();

      // Assert
      expect(guidedWizardServiceSpy.moveToStep).not.toHaveBeenCalled();
    });
  });
});
