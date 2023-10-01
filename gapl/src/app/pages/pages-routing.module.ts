import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "appointments",
        loadChildren: () => import("./appointments/appointments.module").then(m => m.AppointmentsModule)
      },
      {
        path: "patients",
        loadChildren: () => import("./patients/patients.module").then(m => m.PatientsModule)
      },
      {
        path: "payments",
        loadChildren: () => import("./payments/payments.module").then(m => m.PaymentsModule)
      },
      {
        path: "catalog",
        loadChildren: () => import("./catalog/catalog.module").then(m => m.CatalogModule)
      },
      {
        path: "inventory",
        loadChildren: () => import("./inventory/inventory.module").then(m => m.InventoryModule)
      },
      {
        path: "settings",
        loadChildren: () => import("./settings/settings.module").then(m => m.SettingsModule)
      },
      {
        path: "statistics",
        loadChildren: () => import("./statistics/statistics.module").then(m => m.StatisticsModule)
      },
      {
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "**",
        redirectTo: "",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
