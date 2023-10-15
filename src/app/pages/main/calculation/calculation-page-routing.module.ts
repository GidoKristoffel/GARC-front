import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationPageComponent } from "./calculation-page.component";
import { EPage } from "../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: CalculationPageComponent,
    children: [
      {
        path: EPage.Artifacts,
        loadChildren: () => import('./artifacts/artifacts-page.module').then(m => m.ArtifactsPageModule)
      },
      {
        path: EPage.Talents,
        loadChildren: () => import('./talents/talents-page.module').then(m => m.TalentsPageModule)
      },
      {
        path: EPage.Weapons,
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
