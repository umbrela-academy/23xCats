import { createReducer, on } from '@ngrx/store';
import { eventSelected, setView, eventUnselected } from './calendar.actions';
import { CalendarModel } from './calendar.model';

export const initialState: CalendarModel = {
    view: 'week'
}

export const calendarReducer = createReducer(
    initialState,
    on(setView, (state, payload): CalendarModel => ({ ...state, view: payload.option })),
    on(eventSelected, (state, payload): CalendarModel => ({ ...state, selectedEvent: payload.option })),
    on(eventUnselected, (state): CalendarModel => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { selectedEvent, ...rest } = state;
        return rest;
    })
);