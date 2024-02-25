import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const accountPage: Routes = [
  {
    path: EPage.Profile,
    loadComponent: () => import('./profile/profile-page.component').then((c) => c.ProfilePageComponent)
  },
  {
    path: EPage.Characters,
    loadComponent: () => import('./characters/characters-page.component').then((c) => c.CharactersPageComponent)
  },
  {
    path: EPage.AccountWeapons,
    loadComponent: () => import('./weapons/weapons-page.component').then((c) => c.WeaponsPageComponent)
  },
  {
    path: EPage.Materials,
    loadComponent: () => import('./materials/materials-page.component').then((c) => c.MaterialsPageComponent)
  }
];
