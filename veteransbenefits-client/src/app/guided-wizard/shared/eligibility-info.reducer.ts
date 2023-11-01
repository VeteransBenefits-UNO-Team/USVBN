import { Action, createReducer, on } from '@ngrx/store';
import * as EligibilityInfoActions from './eligibility-info.actions';
import { EligibilityState } from './eligibility-info.state';

export const initialState: EligibilityState = {
  eligibilityInfo: [],
  branches: [],
  serviceTypes: [],
  rankCategories: [],
};

const _eligibilityInfoReducer = createReducer(
  initialState,
  on(EligibilityInfoActions.loadAllSuccess, (state, action) => ({
    ...state,
    eligibilityInfo: action.data,
  })),
  on(EligibilityInfoActions.setBranches, (state, action) => ({
    ...state,
    branches: action.branches,
  })),
  on(EligibilityInfoActions.setServiceTypes, (state, action) => ({
    ...state,
    serviceTypes: action.serviceTypes,
  })),
  on(EligibilityInfoActions.setRankCategories, (state, action) => ({
    ...state,
    rankCategories: action.rankCategories,
  }))
);

export function eligibilityInfoReducer(
  state: EligibilityState | undefined,
  action: Action
) {
  return _eligibilityInfoReducer(state, action);
}
