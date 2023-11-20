import { DestroyRef, Injectable } from '@angular/core';
import { LocalStorageService } from "../local-storage/local-storage.service";
import { Router } from "@angular/router";
import { ELocalStorage } from "../../enums/local-storage";
import { EPage } from "../../enums/page.enum";
import { AuthorizationApiService } from "../../../modules/auth/api/authorization/authorization.api.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { authorizationApiResult } from "../../../modules/auth/interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private authorizationApiService: AuthorizationApiService,
    private destroyRef: DestroyRef
  ) { }

  public logIn(email: string, password: string): void {
    if (email && password) {

      this.authorizationApiService
        .logIn({email, password})
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((response: authorizationApiResult): void => {
          this.localStorageService.set(ELocalStorage.Token, (response.accessToken));
          this.router.navigate([EPage.Main]).then();
        });
    }
  }

  public logOut(): void {
    this.authorizationApiService
      .logOut()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.localStorageService.remove(ELocalStorage.Token);
        this.router.navigate([EPage.Authorization]).then();
      });
  }
}
