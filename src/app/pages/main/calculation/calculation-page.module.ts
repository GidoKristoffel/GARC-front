import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationPageRoutingModule } from './calculation-page-routing.module';
import { CalculationPageComponent } from './calculation-page.component';


@NgModule({
  declarations: [
    CalculationPageComponent
  ],
  imports: [
    CommonModule,
    CalculationPageRoutingModule
  ]
})
export class CalculationPageModule { }
