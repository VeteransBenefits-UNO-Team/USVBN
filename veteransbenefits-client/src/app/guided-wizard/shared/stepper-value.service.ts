// eligibility-info.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EligibilityInfo } from './models/eligibility-info.model';
import { PersonalInfo } from './models/personal-info.model';

@Injectable({
  providedIn: 'root',
})
export class StepperValueService {
  private readonly apiUrl = 'http://localhost:8080/api';
  private readonly eligibilityInfoUrl = `${this.apiUrl}/eligibility/all`;
  private readonly personalInfoUrl = `${this.apiUrl}/personal/all`;

  constructor(private http: HttpClient) {}

  getAllEligibilityInfo(): Observable<EligibilityInfo> {
    return this.http.get<EligibilityInfo>(this.eligibilityInfoUrl);
  }

  getAllPersonalInfo(): Observable<PersonalInfo> {
    return this.http.get<PersonalInfo>(this.personalInfoUrl);
  }
}
