import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { SpeedDialModule } from 'primeng/speeddial';

import { AgGridModule } from 'ag-grid-angular';

import { CalendarModule } from 'primeng/calendar';
import { InventoryNewQuickComponent } from './inventory-new-quick/inventory-new-quick.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [InventoryComponent, InventoryNewQuickComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    AgGridModule,
    FontAwesomeModule,
    SpeedDialModule,
    DialogModule,
    CalendarModule,
    ReactiveFormsModule,
  ],
})
export class InventoryModule { }
