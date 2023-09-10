import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { DateInput } from '@fullcalendar/core';
import { EventApi, EventInput } from '@fullcalendar/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { RGB } from '../../../core/models/rgb.model';
import { eventUnselected } from '../store/calendar.actions';
import { RGBObj } from './../../../core/models/rgb.model';
import { CalendarEventService } from './../services/calendar-event.service';
import { CalendarViewService } from './../services/calendar-view.service';

interface EventForm {
  id: FormControl<string>;
  title: FormControl<string>;
  start: FormControl<Date | DateInput>;
  end: FormControl<Date | DateInput>;
  allDay: FormControl<boolean>;
  backgroundColor: FormControl<RGBObj>;
}

@Component({
  selector: 'gapl-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit, OnDestroy {

  @Input() displayEditor$!: Observable<boolean>;

  eventForm!: FormGroup<EventForm>;
  currentEventApi?: EventApi | null;

  constructor(
    protected eventObj: CalendarEventService,
    private viewService: CalendarViewService,
    private fb: NonNullableFormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group<EventForm>({
      id: this.fb.control("", [Validators.required]),
      title: this.fb.control("", Validators.required),
      start: this.fb.control(new Date()),
      end: this.fb.control(new Date()),
      allDay: this.fb.control(false),
      backgroundColor: this.fb.control({ r: 100, g: 130, b: 150 })
    });

    this.eventObj.selection$.subscribe(evObj => {
      this.updateFormContent(evObj);
      if (!evObj.id) return;
      this.currentEventApi = this.viewService.api?.getEventById(evObj.id);
    });

    this.updateEventDetails();
  }

  updateEventDetails() {
    this.eventForm.controls['title'].valueChanges.pipe(
      tap(title => this.currentEventApi?.setProp('title', title))
    ).subscribe();

    this.eventForm.controls['backgroundColor'].valueChanges.pipe(
      tap(bgColor => {
        const colorObj = RGB.fromObj(bgColor);
        this.currentEventApi?.setProp('backgroundColor', colorObj.asStr());
        this.currentEventApi?.setProp('textColor', colorObj.invertBW().asStr());
      }),
    ).subscribe();

    this.eventForm.controls['allDay'].valueChanges.pipe(
      tap(allDay => this.currentEventApi?.setAllDay(allDay))
    ).subscribe();

    this.eventForm.controls['start'].valueChanges.pipe(
      tap(start => this.currentEventApi?.setStart(start))
    ).subscribe();

    this.eventForm.controls['end'].valueChanges.pipe(
      tap(end => this.currentEventApi?.setEnd(end))
    ).subscribe();

  }

  updateFormContent(evObj: EventInput) {
    const rgb: RGBObj = evObj.backgroundColor ?
      RGB.fromStr(evObj.backgroundColor).asObj() :
      this.eventForm.controls['backgroundColor'].value;

    this.eventForm.patchValue({
      id: evObj.id,
      title: evObj.title,
      start: evObj.start,
      end: evObj.end,
      allDay: evObj.allDay,
      backgroundColor: rgb,
    });
  }

  setBottomBar(show: boolean) {
    this.viewService.showEditor(show);
  }

  selectionClosed() {
    this.cleanup()
    this.store.dispatch(eventUnselected({ option: this.eventForm.value.id }));
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  cleanup() {
    this.currentEventApi = null;
  }
}
