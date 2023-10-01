import { EventInput } from "@fullcalendar/core";

export type ViewOptionType = 'day' | 'week' | 'month' | 'list';
export type ViewType = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';

export interface ViewOptionProp { option: ViewOptionType }

export interface CalendarModel {
    view: ViewOptionType;
    selectedEvent?: EventInput; 
}