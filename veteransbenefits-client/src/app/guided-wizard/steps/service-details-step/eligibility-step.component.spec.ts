import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityStepComponent } from './eligibility-step.component';

describe('EligibilityStepComponent', () => {
  let component: EligibilityStepComponent;
  let fixture: ComponentFixture<EligibilityStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibilityStepComponent],
    });
    fixture = TestBed.createComponent(EligibilityStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
