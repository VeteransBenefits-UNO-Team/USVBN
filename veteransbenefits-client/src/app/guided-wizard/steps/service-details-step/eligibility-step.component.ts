import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { EligibilityState } from '../../shared/eligibility-info.state';
import { loadAll } from '../../shared/eligibility-info.actions';
import { EligibilityInfoService } from '../../shared/eligibility-info.service';

@Component({
  selector: 'app-eligibility-step',
  templateUrl: './eligibility-step.component.html',
  styleUrls: ['./eligibility-step.component.scss'],
})
export class EligibilityStepComponent implements OnInit {
  serviceDetailsForm: FormGroup;
  branches$: Observable<string[]> | undefined;
  serviceTypes$: Observable<string[]> | undefined;
  rankCategories$: Observable<string[]> | undefined;
  ranksAtDischarge$: Observable<string[]> | undefined;

  constructor(
    private eligibilityInfoService: EligibilityInfoService,
    private fb: FormBuilder,
    private store: Store<EligibilityState>
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
    this.store.dispatch(loadAll());

    this.branches$ = this.store.select(
      (state) => state.eligibilityInfo?.branches || []
    );
    this.serviceTypes$ = this.store.select(
      (state) => state.eligibilityInfo?.serviceTypes || []
    );
    this.rankCategories$ = this.store.select(
      (state) => state.eligibilityInfo?.rankCategories || []
    );

    if (this.serviceDetailsForm) {
      this.serviceDetailsForm
        .get('branch')
        ?.valueChanges.subscribe((branch) => {
          this.updateDischargeRanks(branch);
        });
    }
  }

  updateDischargeRanks(branch: string): void {
    switch (branch) {
      case 'Army':
        this.ranksAtDischarge$ = this.store.select(
          (state) => state.eligibilityInfo?.armyRanks || []
        );
        break;
      case 'Navy':
        this.ranksAtDischarge$ = this.store.select(
          (state) => state.eligibilityInfo?.navyRanks || []
        );
        break;
      case 'Air Force':
        this.ranksAtDischarge$ = this.store.select(
          (state) => state.eligibilityInfo?.airForceRanks || []
        );
        break;
      case 'Marines':
        this.ranksAtDischarge$ = this.store.select(
          (state) => state.eligibilityInfo?.marineRanks || []
        );
        break;
      case 'CoastGuard':
        this.ranksAtDischarge$ = this.store.select(
          (state) => state.eligibilityInfo?.coastGuardRanks || []
        );
        break;
      default:
        this.ranksAtDischarge$ = of([]);
        break;
    }
  }

  onBranchSelect(event: any): void {
    const branch = event.value;
  }

  onServiceTypeSelect(event: any): void {
    const serviceType = event.value;
  }

  onRankCategorySelect(event: any): void {
    const rankCategory = event.value;
  }

  moveToNextStep(): void {
    if (this.serviceDetailsForm.valid) {
    } else {
      console.error('Form is not valid');
    }
  }

  testService() {
    this.eligibilityInfoService.getAll().subscribe(
      (data) => console.log('Service Data:', data),
      (error) => console.log('Service Error:', error)
    );
  }
}
