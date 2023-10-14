import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";

@Component({
  selector: 'tvt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public readonly authorizationLink: EPage = EPage.Authorization;

}
