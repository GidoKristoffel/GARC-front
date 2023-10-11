import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "./services/auth.service";
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from "./components/authorization/authorization.component";


@NgModule({
  declarations: [
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule {}
