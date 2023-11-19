import { Component, Input } from '@angular/core';
import { createMask } from "@ngneat/input-mask";
import { FormGroupDirective } from "@angular/forms";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";

@Component({
  selector: 'tvt-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';

  public emailInputMask = createMask({ alias: 'email' });

  constructor(
    protected override rootFormGroup: FormGroupDirective,
  ) {
    super(rootFormGroup);
  }
}
