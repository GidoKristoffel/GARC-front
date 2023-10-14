import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from "./registration-page.component";
import { LanguageModule } from "../../modules/language/language.module";
import { AuthModule } from "../../modules/auth/auth.module";


@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    LanguageModule,
    AuthModule
  ]
})
export class RegistrationPageModule { }
