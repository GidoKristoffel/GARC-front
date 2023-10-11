import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationPageComponent } from "./calculation-page.component";

const routes: Routes = [
  {
    path: '',
    component: CalculationPageComponent,
    children: [
      {
        path: 'artifacts',
        loadChildren: () => import('./artifacts/artifacts-page.module').then(m => m.ArtifactsPageModule)
      },
      {
        path: 'talents',
        loadChildren: () => import('./talents/talents-page.module').then(m => m.TalentsPageModule)
      },
      {
        path: 'weapons',
        loadChildren: () => import('./weapons/weapons-page.module').then(m => m.WeaponsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculationPageRoutingModule { }
