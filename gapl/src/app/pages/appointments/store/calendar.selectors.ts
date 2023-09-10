
import { createFeatureSelector } from '@ngrx/store';
import { CalendarModel } from './calendar.model';

export const selectCalendar = createFeatureSelector<CalendarModel>('calendar');