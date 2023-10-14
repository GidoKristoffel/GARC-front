import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";
import { AuthService } from "../../services/auth.service";
import { FormBuilder } from "@angular/forms";
import { EBtnType } from "../../../../core/enums/btn-type.enum";

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
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public logIn(): void {
    console.log(this.form);
    // this.authService.logIn('', '');
  }
}
