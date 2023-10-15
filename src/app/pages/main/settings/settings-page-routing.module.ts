import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from "./settings-page.component";
import { EPage } from "../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsPageRoutingModule { }
