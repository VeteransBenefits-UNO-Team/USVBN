import { createAction, props } from '@ngrx/store';
import { EligibilityInfo } from './models/eligibility-info.model';

export const loadAll = createAction('[Eligibility Info] Load All');
export const loadAllSuccess = createAction(
  '[Eligibility Info] Load All Success',
  props<{ data: EligibilityInfo }>()
);
export const loadAllFailed = createAction(
  '[Eligibility Info] Load All Failed',
  props<{ error: any }>()
);
