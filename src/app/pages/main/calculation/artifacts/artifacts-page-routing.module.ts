import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationPageComponent } from "../calculation-page.component";
import { EPage } from "../../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: CalculationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtifactsPageRoutingModule { }
