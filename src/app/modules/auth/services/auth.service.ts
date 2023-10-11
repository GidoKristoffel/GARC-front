import { Injectable } from '@angular/core';

@Injectable({
  providedIn: AuthService,
})
export class AuthService {

  constructor() { }

  public getAuthToken(): string {
    return '';
  }
}
