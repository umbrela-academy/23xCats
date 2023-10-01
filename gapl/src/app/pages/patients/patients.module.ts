import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { StepsModule } from 'primeng/steps';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { PatientModule } from '../../features/patient/patient.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientNewQuickComponent } from './patient-new-quick/patient-new-quick.component';
import { PatientIdComponent } from './patient-id/patient-id.component';
import { PatientNotesComponent } from './patient-notes/patient-notes.component';
import { PatientDentalHistoryComponent } from './patient-dental-history/patient-dental-history.component';
import { PatientMedicalHistoryComponent } from './patient-medical-history/patient-medical-history.component';
import { PatientIdPhotoComponent } from './patient-id-photo/patient-id-photo.component';
import { PatientClinicalPhotosComponent } from './patient-clinical-photos/patient-clinical-photos.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PermanentTeethComponent } from './patient-dental-history/permanent-teeth/permanent-teeth.component';
import { DeciduousTeethComponent } from './patient-dental-history/deciduous-teeth/deciduous-teeth.component';
import { ToothFormComponent } from './patient-dental-history/tooth-form/tooth-form.component';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: 'new', component: PatientDetailsComponent },
];

@NgModule({
  declarations: [
    PatientDetailsComponent,
    PatientsComponent,
    PatientNewQuickComponent,
    PatientIdComponent,
    PatientNotesComponent,
    PatientDentalHistoryComponent,
    PatientMedicalHistoryComponent,
    PatientIdPhotoComponent,
    PermanentTeethComponent,
    DeciduousTeethComponent,
    ToothFormComponent,
    PatientClinicalPhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PanelModule,
    StepsModule,
    MenuModule,
    ButtonModule,
    AccordionModule,
    DataViewModule,
    DropdownModule,
    PatientModule,
    SpeedDialModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    RippleModule,
    ChipsModule,
    ChipModule,
    ListboxModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    CarouselModule,
    ImageModule,
    GalleriaModule,
    FontAwesomeModule
  ],
})
export class PatientsModule { }
