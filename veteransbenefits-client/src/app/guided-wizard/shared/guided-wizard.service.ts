import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuidedWizardService {
  private _currentStep = new BehaviorSubject<number>(0);
  currentStep$ = this._currentStep.asObservable();
  private eligibilityData: any;
  private personalInfoData: any;
  private filledForms: any;

  constructor(private http: HttpClient){}

  moveToStep(step: number) {
    this._currentStep.next(step);
  }

  setEligibilityData(data: any): void {
    this.eligibilityData = data;
  }

  setPersonalInfoData(data: any): void {
    this.personalInfoData = data;
  }

  setFilledForms(data: any): void {
    this.filledForms = data;
  }

  getFilledForms(): any {
    return this.filledForms;
  }

  sendFormData(): Observable<any> {
    const aggregateData = {
      eligibility: this.eligibilityData,
      personalInfo: this.personalInfoData
    };
    return this.http.post('http://localhost:8080/api/fillForms/fill', aggregateData)
  }
}
