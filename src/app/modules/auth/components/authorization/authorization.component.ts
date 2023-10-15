import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";
import { FormBuilder } from "@angular/forms";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { SignService } from "../../../../core/services/sign/sign.service";

@Component({
  selector: 'tvt-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  public readonly recoveryLink: string = EPage.Registration;
  public readonly registrationLink: string = EPage.Registration;
  public readonly btnType: EBtnType = EBtnType.Submit;
  public form = this.fb.group({
    login: [''],
    password: ['']
  });

  constructor(
    private signService: SignService,
    private fb: FormBuilder
  ) {}

  public logIn(): void {
    this.signService.logIn(String(this.form.value.login), String(this.form.value.password));
  }
}
