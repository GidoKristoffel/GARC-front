import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from "./dashboard-page.component";
import { EPage } from "../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: DashboardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
