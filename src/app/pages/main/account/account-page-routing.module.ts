import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from "./account-page.component";

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile-page.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('./characters/characters-page.module').then(m => m.CharactersPageModule)
      },
      {
          path: 'weapons',
        loadChildren: () => import('./weapons/weapons-page.module').then(m => m.WeaponsPageModule)
      },
      {
        path: 'materials',
        loadChildren: () => import('./materials/materials-page.module').then(m => m.MaterialsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPageRoutingModule { }
