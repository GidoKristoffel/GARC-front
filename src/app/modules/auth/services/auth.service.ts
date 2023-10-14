import { Injectable } from '@angular/core';
import { LocalStorageService } from "../../../core/services/local-storage/local-storage.service";
import { ELocalStorage } from "../../../core/enums/local-storage";
import { Router } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

@Injectable()
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  public logIn(login: string, password: string): void {
    if (login && password) {
      this.localStorageService.set(ELocalStorage.Token, ('token_' + login + password));
      this.router.navigate([EPage.Main]).then();
    }
  }
}
