import { SpeedDialModule } from 'primeng/speeddial';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  { path: '', component: PaymentsComponent },
];

@NgModule({
  declarations: [PaymentsComponent, PaymentDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AgGridModule,
    SpeedDialModule,
    RouterModule.forChild(routes)
  ],
})
export class PaymentsModule { }
