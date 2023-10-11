import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EPage } from "./core/enums/page.enum";
import { AuthenticatedGuard } from "./modules/auth/guards/authenticated.guard";
import { NonAuthenticatedGuard } from "./modules/auth/guards/non-authenticated.guard";

const routes: Routes = [
  {
    path: EPage.Authorization,
    loadChildren: () => import('./pages/authorization/authorization-page.module').then(m => m.AuthorizationPageModule),
    canActivate: [NonAuthenticatedGuard],
  },
  {
    path: EPage.Registration,
    loadChildren: () => import('./pages/registration/registration-page.module').then(m => m.RegistrationPageModule),
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
