import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationPageRoutingModule } from './authorization-page-routing.module';
import { AuthorizationPageComponent } from "./authorization-page.component";
import { AuthModule } from "../../modules/auth/auth.module";


@NgModule({
  declarations: [
    AuthorizationPageComponent
  ],
    imports: [
        CommonModule,
        AuthorizationPageRoutingModule,
        AuthModule
    ]
})
export class AuthorizationPageModule { }
