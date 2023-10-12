import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';



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
    CommonModule
  ]
})
export class InputModule { }
