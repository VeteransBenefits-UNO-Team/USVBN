import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { StepperValueService } from '../../shared/stepper-value.service';
import { EligibilityInfo } from '../../shared/models/eligibility-info.model';
import { GuidedWizardService } from '../../shared/guided-wizard.service';

@Component({
  selector: 'app-eligibility-step',
  templateUrl: './eligibility-step.component.html',
  styleUrls: ['./eligibility-step.component.scss'],
})
export class EligibilityStepComponent implements OnInit, OnDestroy {
  serviceDetailsForm: FormGroup;

  serviceTypes: string[] = [];
  branches: string[] = [];
  rankCategories: string[] = [];
  airForceRanks: string[][] = [];
  marineRanks: string[][] = [];
  coastGuardRanks: string[][] = [];
  navyRanks: string[][] = [];
  armyRanks: string[][] = [];
  ranksAtDischarge: string[] = [];

  selectedBranch: string = '';
  selectedRankCategory: string = '';

  private readonly destroy$ = new Subject<void>();

  constructor(
    private stepperValueService: StepperValueService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private guidedWizardService: GuidedWizardService
  ) {
    this.serviceDetailsForm = this.fb.group({
      yearsOfService: ['', Validators.required],
      branch: ['', Validators.required],
      serviceType: ['', Validators.required],
      rankCategory: ['', Validators.required],
      rankAtDischarge: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.stepperValueService
      .getAllEligibilityInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe((eligibilityInfo: EligibilityInfo) => {
        if (eligibilityInfo) {
          this.serviceTypes = eligibilityInfo.serviceTypes;
          this.branches = eligibilityInfo.branches;
          this.rankCategories = eligibilityInfo.rankCategories;
          this.airForceRanks = eligibilityInfo.airForceRanks;
          this.marineRanks = eligibilityInfo.marineRanks;
          this.coastGuardRanks = eligibilityInfo.coastGuardRanks;
          this.navyRanks = eligibilityInfo.navyRanks;
          this.armyRanks = eligibilityInfo.armyRanks;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBranchSelect(event: any): void {
    this.selectedBranch = event.value;
    this.updateDischargeRanks(this.selectedBranch, this.selectedRankCategory);
  }

  onServiceTypeSelect(event: any): void {
    const serviceType = event.value;
  }

  onRankCategorySelect(event: any): void {
    this.selectedRankCategory = event.value;
    this.updateDischargeRanks(this.selectedBranch, this.selectedRankCategory);
  }

  onRankAtDischargeSelect(event: any): void {
    const rankAtDischarge = event.value;
  }

  updateDischargeRanks(branch: string, rankCategory?: string): void {
    let ranks: any[] = [];

    switch (branch) {
      case 'Army':
        ranks = this.armyRanks;
        break;
      case 'Navy':
        ranks = this.navyRanks;
        break;
      case 'Air Force':
        ranks = this.airForceRanks;
        break;
      case 'Marines':
        ranks = this.marineRanks;
        break;
      case 'Coast Guard':
        ranks = this.coastGuardRanks;
        break;
      default:
        ranks = [];
        break;
    }

    // if rank category is selected, filter the ranks accordingly
    if (rankCategory) {
      this.ranksAtDischarge = rankCategory === 'Enlisted' ? ranks[0] : ranks[1];
    }

    // clear the rankAtDischarge field in the form to force a re-selection
    this.serviceDetailsForm.controls['rankAtDischarge'].setValue('');

    this.cdr.markForCheck();
  }

  moveToNextStep(): void {
    if (this.serviceDetailsForm.valid) {
      this.guidedWizardService.setEligibilityData(this.serviceDetailsForm.value)
      this.guidedWizardService.moveToStep(1);
    } else {
      console.error('Form is not valid');
    }
  }
}
