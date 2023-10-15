import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from "./authorization-page.component";
import { EPage } from "../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: AuthorizationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationPageRoutingModule { }
