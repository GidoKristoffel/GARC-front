import { Routes } from "@angular/router";
import { EPage } from "../../core/enums/page.enum";

export const mainPage: Routes = [
  {
    path: EPage.Dashboard,
    loadComponent: () => import('./dashboard/dashboard-page.component').then((c) => c.DashboardPageComponent)
  },
  {
    path: EPage.Account,
    loadComponent: () => import('./account/account-page.component').then((c) => c.AccountPageComponent),
    loadChildren: () => import('./account/account-page.routes').then((r) => r.accountPage)
  },
  {
    path: EPage.Calculation,
    loadComponent: () => import('./calculation/calculation-page.component').then((c) => c.CalculationPageComponent),
    loadChildren: () => import('./calculation/calculation-page.routes').then((r) => r.calculationPage)
  },
  {
    path: EPage.Settings,
    loadComponent: () => import('./settings/settings-page.component').then((c) => c.SettingsPageComponent)
  }
];
