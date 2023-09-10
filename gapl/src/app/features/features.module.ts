import { PatientModule } from './patient/patient.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODS = [
  PatientModule
]

@NgModule({
  imports: [
    CommonModule,
    ...MODS
  ],
  exports: [
    ...MODS
  ]
})
export class FeaturesModule { }
