import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponsPageComponent } from "./weapons-page.component";

const routes: Routes = [
  {
    path: '',
    component: WeaponsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponsPageRoutingModule { }
