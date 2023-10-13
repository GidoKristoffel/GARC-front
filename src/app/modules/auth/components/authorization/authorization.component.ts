import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { EPage } from "../../../../core/enums/page.enum";

@Component({
  selector: 'tvt-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  public readonly recoveryLink: string = EPage.Registration;
  public form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
}
