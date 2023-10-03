import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuidedWizardService {
  private _currentStep = new BehaviorSubject<number>(0);
  currentStep$ = this._currentStep.asObservable();

  moveToStep(step: number) {
    this._currentStep.next(step);
  }
}
