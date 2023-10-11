import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationPageRoutingModule } from './authorization-page-routing.module';
import { AuthorizationPageComponent } from "./authorization-page.component";


@NgModule({
  declarations: [
    AuthorizationPageComponent
  ],
  imports: [
    CommonModule,
    AuthorizationPageRoutingModule
  ]
})
export class AuthorizationPageModule { }
