import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const calculationPage: Routes = [
  {
    path: EPage.Artifacts,
    loadComponent: () => import('./artifacts/artifacts-page.component').then((c) => c.ArtifactsPageComponent)
  },
  {
    path: EPage.Talents,
    loadComponent: () => import('./talents/talents-page.component').then((c) => c.TalentsPageComponent)
  },
  {
    path: EPage.Weapons,
    loadComponent: () => import('./weapons/weapons-page.component').then((c) => c.WeaponsPageComponent)
  }
];
