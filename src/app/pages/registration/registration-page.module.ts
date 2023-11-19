import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from "./registration-page.component";
import { LanguageModule } from "../../modules/language/language.module";
import { AuthModule } from "../../modules/auth/auth.module";
import { FormGroupDirective } from "@angular/forms";


@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    LanguageModule,
    AuthModule
  ],
  providers: [
    FormGroupDirective
  ]
})
export class RegistrationPageModule { }
