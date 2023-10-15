import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from "./registration-page.component";
import { EPage } from "../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationPageRoutingModule { }
