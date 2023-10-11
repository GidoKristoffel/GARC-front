import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentsPageComponent } from "./talents-page.component";

const routes: Routes = [
  {
    path: '',
    component: TalentsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentsPageRoutingModule { }
