import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsPageRoutingModule } from './weapons-page-routing.module';
import { WeaponsPageComponent } from './weapons-page.component';


@NgModule({
  declarations: [
    WeaponsPageComponent
  ],
  imports: [
    CommonModule,
    WeaponsPageRoutingModule
  ]
})
export class WeaponsPageModule { }
