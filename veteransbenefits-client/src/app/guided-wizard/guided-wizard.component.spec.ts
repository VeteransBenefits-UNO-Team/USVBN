import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedWizardComponent } from './guided-wizard.component';

describe('GuidedWizardComponent', () => {
  let component: GuidedWizardComponent;
  let fixture: ComponentFixture<GuidedWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidedWizardComponent]
    });
    fixture = TestBed.createComponent(GuidedWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
