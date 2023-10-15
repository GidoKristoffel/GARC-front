import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponsPageComponent } from "./weapons-page.component";
import { EPage } from "../../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: WeaponsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponsPageRoutingModule { }
