import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationPageRoutingModule } from './authorization-page-routing.module';
import { AuthorizationPageComponent } from "./authorization-page.component";
import { AuthModule } from "../../modules/auth/auth.module";
import { LanguageModule } from "../../modules/language/language.module";


@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        AuthorizationPageRoutingModule,
        AuthModule,
        LanguageModule
    ]
})
export class AuthorizationPageModule { }
