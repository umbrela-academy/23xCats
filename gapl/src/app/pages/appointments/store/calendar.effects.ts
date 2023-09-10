import { CalendarEventService } from './../services/calendar-event.service';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { CalendarViewService } from './../services/calendar-view.service';
import { eventHydrated, eventSelected, eventUnselected, setView, viewChanged } from './calendar.actions';

@Injectable()
export class CalendarEffects {

    setView$ = createEffect(() => this.actions$.pipe(
        ofType(setView),
        tap((payload) => this.viewService.change(payload.option)),
        map((payload) => ({ type: viewChanged.type, option: payload.option }))
    ));

    selectEvent$ = createEffect(() => this.actions$.pipe(
        ofType(eventSelected),
        switchMap(payload => {
            const selectedEvt$ = this.eventService.updateSelection(payload.option);
            this.viewService.showEditor();
            return selectedEvt$;
        }),
        map(selectedEvt => ({ type: eventHydrated.type, option: selectedEvt.id }))
    ));

    unselectEvent$ = createEffect(() => this.actions$.pipe(
        ofType(eventUnselected),
        tap(payload => this.viewService.removeBorder(payload.option)),
        map((payload) => eventHydrated({ option: payload.option }))
    ));

    constructor(
        private actions$: Actions,
        private viewService: CalendarViewService,
        private eventService: CalendarEventService
    ) { }

}