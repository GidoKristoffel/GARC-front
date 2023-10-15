import { Injectable } from '@angular/core';
import { LocalStorageService } from "../local-storage/local-storage.service";
import { Router } from "@angular/router";
import { ELocalStorage } from "../../enums/local-storage";
import { EPage } from "../../enums/page.enum";

@Injectable({
  providedIn: 'root'
})
export class SignService {
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

  public logOut(): void {
    this.localStorageService.remove(ELocalStorage.Token);
    this.router.navigate([EPage.Authorization]).then();
  }
}
