import { CalendarViewService } from './calendar-view.service';
import { Subject, Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventInput } from '@fullcalendar/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {

  private selectedEvent$ = new Subject<EventInput>;
  title$ = this.selectedEvent$.pipe(map(evt => `Edit ${evt.title}:`));
  selection$: Observable<EventInput> = this.selectedEvent$.asObservable();

  constructor(private calendarApiService: CalendarViewService) { }

  updateSelection(eventObj: EventInput) {
    this.calendarApiService.api?.getEventById(eventObj.id ?? '0');
    this.selectedEvent$.next(eventObj);
    return this.selectedEvent$;
  }

}
