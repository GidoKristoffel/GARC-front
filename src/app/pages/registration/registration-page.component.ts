import { Component } from '@angular/core';
import { LanguageModule } from "../../modules/language/language.module";
import { AuthModule } from "../../modules/auth/auth.module";

@Component({
  selector: 'tvt-registration-page',
  standalone: true,
  imports: [
    LanguageModule,
    AuthModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

}
