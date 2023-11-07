import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StepperValueService } from './stepper-value.service';
import * as EligibilityInfoActions from './eligibility-info.actions';

@Injectable()
export class EligibilityInfoEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EligibilityInfoActions.loadAll),
      switchMap(() =>
        this.eligibilityInfoService.getAllEligibilityInfo().pipe(
          map((data: any) => EligibilityInfoActions.loadAllSuccess({ data })),
          catchError((error) =>
            of(EligibilityInfoActions.loadAllFailed({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private eligibilityInfoService: StepperValueService
  ) {}
}
