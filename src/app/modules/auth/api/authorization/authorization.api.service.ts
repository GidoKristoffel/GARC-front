import { Injectable } from '@angular/core';
import { environment } from "../../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { IAuthorizationForm } from "../../interfaces/form.interface";
import { Observable } from "rxjs";
import { authorizationApiResult } from "../../interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {
  private readonly api: string = environment.api + '/';

  constructor(
    private http: HttpClient
  ) {}

  public logIn(form: IAuthorizationForm): Observable<authorizationApiResult> {
    return this.http.post<authorizationApiResult>(this.api + 'auth/login', form);
  }

  public logOut(): Observable<void> {
    return this.http.get<void>(this.api + 'auth/logout');
  }
}
