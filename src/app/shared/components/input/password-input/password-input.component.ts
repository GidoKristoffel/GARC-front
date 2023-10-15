import { Component, Input } from '@angular/core';
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'tvt-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }
}
