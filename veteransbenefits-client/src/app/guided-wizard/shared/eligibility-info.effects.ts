import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as EligibilityInfoActions from './eligibility-info.actions';
import { EligibilityInfoService } from './eligibility-info.service';

@Injectable()
export class EligibilityInfoEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EligibilityInfoActions.loadAll),
      switchMap(() =>
        this.eligibilityInfoService.getAll().pipe(
          mergeMap((data: any) =>
            from([
              EligibilityInfoActions.loadAllSuccess({
                data: data.eligibilityInfo,
              }),
              EligibilityInfoActions.setBranches({ branches: data.branches }),
              EligibilityInfoActions.setServiceTypes({
                serviceTypes: data.serviceTypes,
              }),
              EligibilityInfoActions.setRankCategories({
                rankCategories: data.rankCategories,
              }),
            ])
          ),
          catchError(() => of({ type: '[Eligibility Info] Load All Failed' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private eligibilityInfoService: EligibilityInfoService
  ) {}
}
