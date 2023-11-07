// eligibility-info.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EligibilityInfo } from './models/eligibility-info.model';

@Injectable({
  providedIn: 'root',
})
export class EligibilityInfoService {
  private readonly apiUrl = 'http://localhost:8080/api/eligibility';

  constructor(private http: HttpClient) {}

  getAll(): Observable<EligibilityInfo> {
    return this.http.get<EligibilityInfo>(`${this.apiUrl}/all`);
  }
}
