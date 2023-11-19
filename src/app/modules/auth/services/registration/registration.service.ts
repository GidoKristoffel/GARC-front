import { DestroyRef, Injectable } from '@angular/core';
import { IRegistrationFormValue } from "../../interfaces/form.interface";
import { Base64Service } from "../../../../core/services/base64/base64.service";
import { RegistrationApiService } from "../../api/registration/registration.api.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private base64Service: Base64Service,
    private registrationApiService: RegistrationApiService,
    private destroyRef: DestroyRef
  ) { }

  public singUp(form: IRegistrationFormValue): void {
    const encodedForm: IRegistrationFormValue = {
      username: this.base64Service.encode(form.username),
      email: form.email,
      password: this.base64Service.encode(form.password),
      passwordRepeat: this.base64Service.encode(form.passwordRepeat),
    };

    this.registrationApiService
      .register(encodedForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        console.log('success');
      });
  }
}
