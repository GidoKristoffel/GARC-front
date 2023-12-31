import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import { InputModule } from "../../shared/components/input/input.module";
import { ButtonModule } from "../../shared/components/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { LinkModule } from "../../shared/components/link/link.module";
import { DividerModule } from "../../shared/components/divider/divider.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    TranslateModule,
    LinkModule,
    DividerModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthorizationComponent,
    RegistrationComponent
  ]
})
export class AuthModule {
}
