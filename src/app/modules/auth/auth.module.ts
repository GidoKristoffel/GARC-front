import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "./services/auth.service";
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class AuthModule {}
