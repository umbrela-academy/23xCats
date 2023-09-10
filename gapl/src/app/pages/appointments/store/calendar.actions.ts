
import { createAction, props } from '@ngrx/store';
import { ViewOptionType } from './calendar.model';
import { EventInput } from '@fullcalendar/core';

export const setView = createAction('[Calendar] Set View', props<{ option: ViewOptionType }>());

export const viewChanged = createAction('[Calendar] View Changed', props<{ option: ViewOptionType }>());

export const eventSelected = createAction('[Calendar] Event Selected', props<{ option: EventInput }>());
export const eventUnselected = createAction('[Calendar] Event Unselected', props<{ option: string | undefined }>());

export const eventHydrated = createAction('[Calendar] Event Details Set', props<{ option: string | undefined }>());
