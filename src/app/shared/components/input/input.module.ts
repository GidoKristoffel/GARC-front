import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ]
})
export class InputModule {
}
