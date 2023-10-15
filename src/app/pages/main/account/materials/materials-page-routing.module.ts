import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsPageComponent } from "./materials-page.component";
import { EPage } from "../../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: MaterialsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsPageRoutingModule { }
