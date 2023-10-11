import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  public getAuthToken(): string {
    return '';
  }

  public isAuthenticated(): boolean {
    return false;
  }
}
