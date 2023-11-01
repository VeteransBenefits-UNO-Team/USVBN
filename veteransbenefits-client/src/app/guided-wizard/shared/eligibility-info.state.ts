import { EligibilityInfo } from './models/eligibility-info.model';

export interface EligibilityState {
  eligibilityInfo: EligibilityInfo[];
  branches: string[];
  serviceTypes: string[];
  rankCategories: string[];
}
