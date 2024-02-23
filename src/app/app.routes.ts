import { Routes } from "@angular/router";
import { EPage } from "./core/enums/page.enum";
import { NonAuthenticatedGuard } from "./modules/auth/guards/non-authenticated.guard";
import { AuthenticatedGuard } from "./modules/auth/guards/authenticated.guard";

export const routes: Routes = [
  {
    path: EPage.Authorization,
    loadComponent: () => import('./pages/authorization/authorization-page.component').then((c) => c.AuthorizationPageComponent),
    canActivate: [NonAuthenticatedGuard],
  },
  {
    path: EPage.Registration,
    loadComponent: () => import('./pages/registration/registration-page.component').then((c) => c.RegistrationPageComponent),
    canActivate: [NonAuthenticatedGuard],
  },
  {
    path: EPage.Main,
    loadChildren: () => import('./pages/main/main-page.module').then(m => m.MainPageModule),
    canActivate: [AuthenticatedGuard],
  },
  {
    path: EPage.Empty,
    redirectTo: `/${ EPage.Main }`,
    pathMatch: "full"
  }
];
