import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";
import { FormBuilder, Validators } from "@angular/forms";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { RegistrationService } from "../../services/registration/registration.service";
import { IRegistrationFormValue } from "../../interfaces/form.interface";
import { EAutocomplete } from "../../../../core/enums/autocomplete.enum";

@Component({
  selector: 'tvt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public readonly authorizationLink: EPage = EPage.Authorization;
  public readonly btnType: EBtnType = EBtnType.Submit;
  public readonly autocomplete: EAutocomplete = EAutocomplete.Off;
  public form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordRepeat: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {}

  public signUp(): void {
    const form: IRegistrationFormValue = {
      username: this.form.value.username as string,
      email: this.form.value.email as string,
      password: this.form.value.password as string,
      passwordRepeat: this.form.value.passwordRepeat as string
    };
    this.registrationService.singUp(form);
  }
}
