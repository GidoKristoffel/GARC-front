import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from "./profile-page.component";
import { EPage } from "../../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
