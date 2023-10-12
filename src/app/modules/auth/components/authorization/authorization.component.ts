import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'tvt-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  public readonly inputs = [
    {
      label: 'Login',
      placeholder: 'Write login',
    },
    {
      label: 'Password',
      placeholder: 'Write password',
    }
  ];
  public btnText: string = 'Sign in';
  public form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
}
