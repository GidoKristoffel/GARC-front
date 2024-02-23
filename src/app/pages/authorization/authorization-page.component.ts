import { Component } from '@angular/core';
import { LanguageModule } from "../../modules/language/language.module";
import { AuthModule } from "../../modules/auth/auth.module";

@Component({
  selector: 'tvt-authorization-page',
  standalone: true,
  imports: [
    LanguageModule,
    AuthModule
  ],
  templateUrl: './authorization-page.component.html',
  styleUrl: './authorization-page.component.scss'
})
export class AuthorizationPageComponent {}
