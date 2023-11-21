import { DestroyRef, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { EPage } from "../../enums/page.enum";
import { AuthorizationApiService } from "../../../modules/auth/api/authorization/authorization.api.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ELocalStorage } from "../../enums/local-storage";
import { accessTokenResponse } from "../../../shared/interfaces/api.interface";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(
    private router: Router,
    private authorizationApiService: AuthorizationApiService,
    private destroyRef: DestroyRef,
    private localStorageService: LocalStorageService
  ) {}

  public logIn(email: string, password: string): void {
    if (email && password) {
      this.authorizationApiService
        .logIn({email, password})
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((response: accessTokenResponse): void => {
          this.localStorageService.set(ELocalStorage.Token, (response.accessToken));
          this.router.navigate([EPage.Main]).then();
        });
    }
  }

  public logOut(): void {
    this.authorizationApiService
      .logOut()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.localStorageService.remove(ELocalStorage.Token);
        this.router.navigate([EPage.Authorization]).then();
      });
  }
}
