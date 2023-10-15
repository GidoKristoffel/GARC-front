import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentsPageComponent } from "./talents-page.component";
import { EPage } from "../../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: TalentsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentsPageRoutingModule { }
