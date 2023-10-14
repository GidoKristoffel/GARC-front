import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { EmailInputComponent } from './email-input/email-input.component';
import { InputMaskModule } from "@ngneat/input-mask";


@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    EmailInputComponent
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    EmailInputComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    InputMaskModule
  ]
})
export class InputModule {
}
