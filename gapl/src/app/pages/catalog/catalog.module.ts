import { ButtonModule } from 'primeng/button';
import { TreatmentListEffects } from './store/treatment-list/treatment-list.effects';
import { EffectsModule } from '@ngrx/effects';
import { treatmentListFeature } from './store/treatment-list/treatment-list.reducer';
import { StoreModule } from '@ngrx/store';
import { SpeedDialModule } from 'primeng/speeddial';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentNewQuickComponent } from './treatment-new-quick/treatment-new-quick.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionCellComponent } from './treatment/action-cell/action-cell.component';
import { NumericCellComponent } from './treatment/numeric-cell/numeric-cell.component';
import { TreatmentEffects } from './store/treatment/treatment.effects';

@NgModule({
  declarations: [
    TreatmentComponent,
    TreatmentNewQuickComponent,
    ActionCellComponent,
    NumericCellComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FontAwesomeModule,
    AgGridModule,
    SpeedDialModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(treatmentListFeature),
    EffectsModule.forFeature([TreatmentListEffects, TreatmentEffects]),
  ],
})
export class CatalogModule { }
