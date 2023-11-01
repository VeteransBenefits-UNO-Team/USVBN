import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as EligibilityInfoActions from '../../shared/eligibility-info.actions';
import { EligibilityState } from '../../shared/eligibility-info.state';

@Component({
  selector: 'app-eligibility-step',
  templateUrl: './eligibility-step.component.html',
  styleUrls: ['./eligibility-step.component.scss'],
})
export class EligibilityStepComponent implements OnInit {
  serviceDetailsForm: FormGroup;
  branches$: Observable<string[]>;
  serviceTypes$: Observable<string[]>;
  rankCategories$: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ eligibility: EligibilityState }>
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

    this.branches$ = this.store.select((state) => state.eligibility.branches);
    this.serviceTypes$ = this.store.select(
      (state) => state.eligibility.serviceTypes
    );
    this.rankCategories$ = this.store.select(
      (state) => state.eligibility.rankCategories
    );
  }

  ngOnInit(): void {
    this.store.dispatch(EligibilityInfoActions.loadAll());
    this.store.dispatch(EligibilityInfoActions.loadBranches());
    this.store.dispatch(EligibilityInfoActions.loadServiceTypes());
    this.store.dispatch(EligibilityInfoActions.loadRankCategories());
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
}
