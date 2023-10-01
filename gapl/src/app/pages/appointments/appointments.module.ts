import { SpeedDialModule } from 'primeng/speeddial';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RxLet } from '@rx-angular/template/let';


import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { AppointmentsComponent } from './appointments/appointments.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { CalendarEffects } from './store/calendar.effects';
import { calendarReducer } from './store/calendar.reducer';
import { FullCalendarModule } from '@fullcalendar/angular';

const routes: Routes = [{ path: '', component: AppointmentsComponent }];

@NgModule({
  declarations: [AppointmentsComponent, EventEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenubarModule,
    InputTextModule,
    CalendarModule,
    FullCalendarModule,
    DialogModule,
    ButtonModule,
    RxLet,
    ReactiveFormsModule,
    ColorPickerModule,
    ToggleButtonModule,
    SpeedDialModule,
    StoreModule.forFeature('calendar', calendarReducer),
    EffectsModule.forFeature([CalendarEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppointmentsModule { }
