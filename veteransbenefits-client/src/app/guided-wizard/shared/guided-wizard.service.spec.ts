import { TestBed } from '@angular/core/testing';
import { GuidedWizardService } from './guided-wizard.service';
import { skip, take } from 'rxjs/operators';

describe('GuidedWizardService', () => {
  let service: GuidedWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidedWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with step 0', (done: DoneFn) => {
    service.currentStep$.pipe(take(1)).subscribe((step) => {
      expect(step).toBe(0);
      done();
    });
  });

  it('should move to a different step', (done: DoneFn) => {
    const nextStep = 2;

    // Skip the initial value of the BehaviorSubject.
    service.currentStep$.pipe(skip(1)).subscribe((step) => {
      expect(step).toBe(nextStep);
      done();
    });

    service.moveToStep(nextStep);
  });
});
