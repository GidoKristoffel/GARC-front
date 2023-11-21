import { Component, Input } from '@angular/core';
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { FormGroupDirective } from "@angular/forms";
import { EAutocomplete } from "../../../../core/enums/autocomplete.enum";

@Component({
  selector: 'tvt-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';
  @Input() autocomplete: EAutocomplete = EAutocomplete.On;

  constructor(
    protected override rootFormGroup: FormGroupDirective,
  ) {
    super(rootFormGroup);
  }
}
