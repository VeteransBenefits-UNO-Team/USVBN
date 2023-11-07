import { Action, createReducer, on } from '@ngrx/store';
import * as EligibilityInfoActions from './eligibility-info.actions';
import { EligibilityState, initialState } from './eligibility-info.state';

const _eligibilityInfoReducer = createReducer(
  initialState,
  on(EligibilityInfoActions.loadAllSuccess, (state, { data }) => ({
    ...state,
    eligibilityInfo: data,
    error: null,
  })),
  on(EligibilityInfoActions.loadAllFailed, (state, { error }) => ({
    ...state,
    eligibilityInfo: null,
    error: error,
  }))
);

export function eligibilityInfoReducer(
  state: EligibilityState | undefined,
  action: Action
) {
  return _eligibilityInfoReducer(state, action);
}
