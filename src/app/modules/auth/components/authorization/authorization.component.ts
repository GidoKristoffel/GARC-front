import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";

@Component({
  selector: 'tvt-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  public readonly recoveryLink: string = EPage.Registration;
  public readonly registrationLink: string = EPage.Registration;
}
