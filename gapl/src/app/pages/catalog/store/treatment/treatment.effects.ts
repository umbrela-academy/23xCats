import { switchMap, map, noop, of, catchError } from 'rxjs';
import { treatmentActions } from './treatment.actions';
import { TreatmentApiService } from './../../services/treatment-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";

@Injectable()
export class TreatmentEffects {

    constructor(
        private actions$: Actions,
        private treatmentApiService: TreatmentApiService
    ) { }

    updateTreatments = createEffect(() =>
        this.actions$.pipe(
            ofType(
                treatmentActions.updateTreatmentInLine
            ),
            switchMap(({ treatment }) =>
                this.treatmentApiService.updateFull(treatment).pipe(
                    map(() => treatmentActions.updateTreatmentSuccess({ id: treatment.id })),
                    catchError(error => of(treatmentActions.updateTreatmentFailure({ error })))
                )
            )
        )
    );

}