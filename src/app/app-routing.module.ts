import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authorization',
    loadChildren: () => import('./pages/authorization/authorization-page.module').then(m => m.AuthorizationPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration-page.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main-page.module').then(m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
