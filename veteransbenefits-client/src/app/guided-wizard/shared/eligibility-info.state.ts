import { EligibilityInfo } from './models/eligibility-info.model';

export interface EligibilityState {
  eligibilityInfo: EligibilityInfo | null;
  error: any;
}

export const initialState: EligibilityState = {
  eligibilityInfo: null,
  error: null,
};
