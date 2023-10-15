import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page.component";

import { EPage } from "../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: MainPageComponent,
    children: [
      {
        path: EPage.Dashboard,
        loadChildren: () => import('./dashboard/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: EPage.Account,
        loadChildren: () => import('./account/account-page.module').then(m => m.AccountPageModule)
      },
      {
        path: EPage.Calculation,
        loadChildren: () => import('./calculation/calculation-page.module').then(m => m.CalculationPageModule)
      },
      {
        path: EPage.Settings,
        loadChildren: () => import('./settings/settings-page.module').then(m => m.SettingsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
