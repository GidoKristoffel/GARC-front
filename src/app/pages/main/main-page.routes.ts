import { Routes } from "@angular/router";
import { EPage } from "../../core/enums/page.enum";

export const mainPage: Routes = [
  {
    path: EPage.Dashboard,
    loadComponent: () => import('./dashboard/dashboard-page.component').then((c) => c.DashboardPageComponent)
  },
  {
    path: EPage.Account,
    loadComponent: () => import('./account/account-page.component').then((c) => c.AccountPageComponent)
  },
  {
    path: EPage.Calculation,
    loadComponent: () => import('./calculation/calculation-page.component').then((c) => c.CalculationPageComponent)
  },
  {
    path: EPage.Settings,
    loadComponent: () => import('./settings/settings-page.component').then((c) => c.SettingsPageComponent)
  }
];
