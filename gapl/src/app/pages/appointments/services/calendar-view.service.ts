import { Injectable } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ViewOptionType, ViewType } from '../store/calendar.model';
import { ColorsService } from './../../../core/services/colors.service';
import { eventSelected } from './../store/calendar.actions';
import { CalendarApi, CalendarOptions, DateSelectArg, EventAddArg, EventApi, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core';

type ViewMap = {
  [key in ViewOptionType]: ViewType;
};

const plugins = [
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
];

@Injectable({
  providedIn: 'root'
})
export class CalendarViewService {

  private calendarApi!: CalendarApi | null;

  private opts!: CalendarOptions;

  private displayEditor = new BehaviorSubject<boolean>(false);

  displayEditor$ = this.displayEditor.asObservable();

  private viewMap: ViewMap = {
    day: 'timeGridDay',
    week: 'timeGridWeek',
    month: 'dayGridMonth',
    list: 'listWeek',
  };

  constructor(private store: Store, private colorsService: ColorsService) {
    this.opts = {
      plugins,
      initialDate: new Date(),
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,timeGridDay',
        center: 'title',
        right: 'listWeek prev,today,next',
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
      },

      businessHours: {
        daysOfWeek: [0, 1, 2, 3, 4, 5],
        startTime: '09:00',
        endTime: '18:00',
      },
      nowIndicator: true,
      height: '80vh',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      forceEventDuration: true,
      defaultTimedEventDuration: { minutes: 30 },

      eventAdd: (e: any )=> this.onEventAdd(e),
      eventClick: (e: any )=> this.onEventClick(e),
      eventDrop: (e: any )=> this.onEventDrop(e),
      dateClick: (e: any )=> this.onDateClick(e),
      select: (e: any )=> this.onSelect(e),
    };
  }

  get options() {
    return this.opts;
  }

  set api(api: CalendarApi | null) {
    this.calendarApi = api;
  }

  get api() {
    return this.calendarApi;
  }

  private refreshEvents() {
    if (!this.calendarApi) return;
    this.opts.events = [...this.calendarApi.getEvents().map((e: any) => this.createEvtObjFromEventApi(e))];
  }

  showEditor(show?: boolean) {
    this.displayEditor.next(show ?? true);
  }

  private checkInit() {
    if (!this.calendarApi) throw new Error("Calendar API not set before invoking view change.");
  }

  change(option: ViewOptionType) {
    this.checkInit();
    this.calendarApi?.changeView(this.viewMap[option]);
  }

  private createEvtObjFromSelect(arg: DateSelectArg): EventInput {
    const { allDay, end, endStr, start, startStr } = arg;
    const id = uuidv4();
    const title = `New Event ${id.substring(0, 2)}`;
    const [color, textColor] = this.colorsService.randomBGandFG();
    return {
      id,
      title,
      allDay,
      end,
      endStr,
      start,
      startStr,
      backgroundColor: color.asStr(),
      borderColor: color.asStr(),
      textColor: textColor.asStr()
    };
  }

  private createEvtObjFromEventApi(arg: EventApi): EventInput {
    const { allDay, end, endStr, start, startStr, id, title, backgroundColor, textColor } = arg;
    return {
      id,
      title,
      allDay,
      end: end ?? new Date(),
      endStr,
      start: start ?? new Date(),
      startStr,
      backgroundColor,
      textColor
    };
  }

  private onSelect(dateSelect: DateSelectArg) {
    const eventObj = this.createEvtObjFromSelect(dateSelect);
    const currentEvt = this.calendarApi?.addEvent(eventObj);
    currentEvt?.setProp('borderColor', 'indigo');
    this.store.dispatch(eventSelected({ option: eventObj }));
  }

  removeBorder(evtId: string | undefined) {
    if (!evtId) return;
    const currentEvt = this.calendarApi?.getEventById(evtId);
    currentEvt?.setProp('borderColor', currentEvt.backgroundColor);
  }

  private onEventClick(eventClick: EventClickArg) {
    const eventObj = this.createEvtObjFromEventApi(eventClick.event);
    eventClick.event.setProp('borderColor', 'indigo');
    this.store.dispatch(eventSelected({ option: eventObj }));
  }

  private onEventAdd(eventAdd: EventAddArg) {
    console.log("eventAdd", eventAdd);
  }

  private onDateClick(dateClick: DateClickArg) {
    console.log('dateClick: ', dateClick);
  }

  private onEventDrop(eventDrop: EventDropArg) {
    console.log('eventDrop', eventDrop);
  }

}
