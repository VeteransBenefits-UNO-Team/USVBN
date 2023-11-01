import { createAction, props } from '@ngrx/store';
import { EligibilityInfo } from './models/eligibility-info.model'; // Import the model from a single source

export const loadAll = createAction('[Eligibility Info] Load All');
export const loadAllSuccess = createAction(
  '[Eligibility Info] Load All Success',
  props<{ data: EligibilityInfo[] }>()
);

export const load = createAction(
  '[Eligibility Info] Load',
  props<{ years: number }>()
);
export const loadSuccess = createAction(
  '[Eligibility Info] Load Success',
  props<{ data: EligibilityInfo }>()
);

export const loadBranches = createAction('[Eligibility Info] Load Branches');
export const setBranches = createAction(
  '[Eligibility Info] Set Branches',
  props<{ branches: string[] }>()
);

export const loadServiceTypes = createAction(
  '[Eligibility Info] Load ServiceTypes'
);
export const setServiceTypes = createAction(
  '[Eligibility Info] Set ServiceTypes',
  props<{ serviceTypes: string[] }>()
);

export const loadRankCategories = createAction(
  '[Eligibility Info] Load RankCategories'
);
export const setRankCategories = createAction(
  '[Eligibility Info] Set RankCategories',
  props<{ rankCategories: string[] }>()
);
