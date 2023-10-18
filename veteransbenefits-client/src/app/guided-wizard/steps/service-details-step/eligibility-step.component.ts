import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuidedWizardService } from '../../shared/guided-wizard.service';
import { RankService } from '../../shared/rank.service';

@Component({
  selector: 'app-eligibility-step',
  templateUrl: './eligibility-step.component.html',
  styleUrls: ['./eligibility-step.component.scss'],
})
export class EligibilityStepComponent implements OnInit {
  serviceDetailsForm: FormGroup;
  branches: string[] = [];
  rankCategories: string[] = [];
  filteredRanks: string[] = [];
  serviceTypes: string[] = ['Active', 'Guard', 'Reserve']; // Service types
  showRankCategory: boolean = false;

  constructor(
    private fb: FormBuilder,
    private wizardState: GuidedWizardService,
    private rankService: RankService
  ) {
    this.serviceDetailsForm = this.fb.group({
      yearsOfService: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      branch: ['', Validators.required],
      serviceType: ['', Validators.required],
      rankCategory: [''],
      dischargeRank: [''],
    });

    this.branches = this.rankService.getBranches();
    this.rankCategories = this.rankService.getRankCategories();
  }

  ngOnInit() {}

  onBranchSelect(event: any) {
    const branch = event.value;
    this.showRankCategory = this.rankService.hasBranch(branch);
    this.serviceDetailsForm.get('rankCategory')!.setValue('');
    this.filteredRanks = [];
  }

  onRankCategorySelect(event: any) {
    const category = event.value;
    const branch = this.serviceDetailsForm.get('branch')!.value;
    if (category && branch) {
      this.filteredRanks = this.rankService.getRanks(branch, category);
    }
  }

  moveToNextStep() {
    if (this.serviceDetailsForm.valid) {
      this.wizardState.moveToStep(1);
    } else {
      console.error('Form is not valid');
    }
  }
}
