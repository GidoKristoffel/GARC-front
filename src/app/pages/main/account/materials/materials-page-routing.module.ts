import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsPageComponent } from "./materials-page.component";

const routes: Routes = [
  {
    path: '',
    component: MaterialsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsPageRoutingModule { }
