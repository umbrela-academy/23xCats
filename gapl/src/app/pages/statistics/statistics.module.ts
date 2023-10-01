import { SpeedDialModule } from 'primeng/speeddial';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SpeedDialModule
  ]
})
export class StatisticsModule { }
