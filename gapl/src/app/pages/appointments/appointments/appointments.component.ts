import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { CalendarViewService } from './../services/calendar-view.service';

@Component({
  selector: 'gapl-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  options!: CalendarOptions;

  floatItems!: MenuItem[];

  displayEditor$ = this.viewService.displayEditor$;

  @ViewChild('calendar', { static: true}) calendar!: FullCalendarComponent;

  constructor(private viewService: CalendarViewService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.options = this.viewService.options;
  }

  ngAfterViewInit() {
    this.viewService.api = this.calendar.getApi();
  }

}
