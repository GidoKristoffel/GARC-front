import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account-page.module').then(m => m.AccountPageModule)
      },
      {
        path: 'calculation',
        loadChildren: () => import('./calculation/calculation-page.module').then(m => m.CalculationPageModule)
      },
      {
        path: 'settings',
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
