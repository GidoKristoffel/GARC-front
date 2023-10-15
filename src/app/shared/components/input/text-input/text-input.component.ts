import { Component, Input } from '@angular/core';
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'tvt-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';

  constructor(
    protected override rootFormGroup: FormGroupDirective,
  ) {
    super(rootFormGroup);
  }
}
