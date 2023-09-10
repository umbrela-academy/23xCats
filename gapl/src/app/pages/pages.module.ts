import { SpeedDialModule } from 'primeng/speeddial';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { PatientsModule } from './patients/patients.module';
import { PaymentsModule } from './payments/payments.module';
import { CatalogModule } from './catalog/catalog.module';
import { InventoryModule } from './inventory/inventory.module';
import { SettingsModule } from './settings/settings.module';
import { StatisticsModule } from './statistics/statistics.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SpeedDialModule,
    AppointmentsModule,
    PatientsModule,
    PaymentsModule,
    CatalogModule,
    InventoryModule,
    SettingsModule,
    StatisticsModule,
    HomeModule,
  ],
})
export class PagesModule {}
