import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationComponent } from "./calculation.component";

const routes: Routes = [
  {
    path: '',
    component: CalculationComponent,
    children: [
      {
        path: 'artifacts',
        loadChildren: () => import('./artifacts/artifacts.module').then(m => m.ArtifactsModule)
      },
      {
        path: 'talents',
        loadChildren: () => import('./talents/talents.module').then(m => m.TalentsModule)
      },
      {
        path: 'weapons',
        loadChildren: () => import('./weapons/weapons.module').then(m => m.WeaponsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculationRoutingModule { }
