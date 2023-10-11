import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentsPageRoutingModule } from './talents-page-routing.module';
import { TalentsPageComponent } from './talents-page.component';


@NgModule({
  declarations: [
    TalentsPageComponent
  ],
  imports: [
    CommonModule,
    TalentsPageRoutingModule
  ]
})
export class TalentsPageModule { }
