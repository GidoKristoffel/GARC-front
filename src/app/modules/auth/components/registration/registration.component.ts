import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'tvt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public readonly authorizationLink: EPage = EPage.Authorization;
  public form = this.fb.group({
    login: [''],
    password: [''],
    "password-repeat": ['']
  });

  constructor(
    private fb: FormBuilder
  ) {}

  public signIn(): void {

  }
}
