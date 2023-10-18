import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GuidedWizardComponent } from './guided-wizard.component';
import { GuidedWizardService } from './shared/guided-wizard.service';
import { of } from 'rxjs';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GuidedWizardComponent', () => {
  let component: GuidedWizardComponent;
  let fixture: ComponentFixture<GuidedWizardComponent>;
  let wizardService: GuidedWizardService;

  beforeEach(async () => {
    const wizardServiceStub = {
      currentStep$: of(0),
      moveToStep: jasmine.createSpy('moveToStep'),
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatStepperModule, BrowserAnimationsModule],
      declarations: [GuidedWizardComponent],
      providers: [
        { provide: GuidedWizardService, useValue: wizardServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedWizardComponent);
    component = fixture.componentInstance;
    wizardService = TestBed.inject(GuidedWizardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the first step', () => {
    expect(component.currentStep).toBe(0);
  });

  it('should move to the next step when moveToNextStep is called', () => {
    component.moveToNextStep();
    expect(wizardService.moveToStep).toHaveBeenCalledWith(1);
  });
});
