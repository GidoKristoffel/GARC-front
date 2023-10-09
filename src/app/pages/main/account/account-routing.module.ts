import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from "./account.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
      },
      {
          path: 'weapons',
        loadChildren: () => import('./weapons/weapons.module').then(m => m.WeaponsModule)
      },
      {
        path: 'materials',
        loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
