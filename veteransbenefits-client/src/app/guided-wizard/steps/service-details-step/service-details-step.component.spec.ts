import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsStepComponent } from './service-details-step.component';

describe('ServiceDetailsStepComponent', () => {
  let component: ServiceDetailsStepComponent;
  let fixture: ComponentFixture<ServiceDetailsStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailsStepComponent]
    });
    fixture = TestBed.createComponent(ServiceDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
