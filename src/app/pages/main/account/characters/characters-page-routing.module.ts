import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from "./characters-page.component";
import { EPage } from "../../../../core/enums/page.enum";

const routes: Routes = [
  {
    path: EPage.Empty,
    component: CharactersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule { }
