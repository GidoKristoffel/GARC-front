import { Injectable } from '@angular/core';
import { environment } from "../../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { IAuthorizationForm } from "../../interfaces/form.interface";
import { Observable } from "rxjs";
import { accessTokenResponse, statusApiResponse, } from "../../../../shared/interfaces/api.interface";
import { apiOptions } from "../../../../core/constants/api.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {
  private readonly api: string = environment.api + '/user/';

  constructor(
    private http: HttpClient
  ) {}

  public logIn(form: IAuthorizationForm): Observable<accessTokenResponse> {
    return this.http.post<accessTokenResponse>(this.api + 'auth/login', form, apiOptions);
  }

  public logOut(): Observable<statusApiResponse> {
    return this.http.get<statusApiResponse>(this.api + 'auth/logout', apiOptions);
  }

  public refreshToken(): Observable<accessTokenResponse> {
    return this.http.get<accessTokenResponse>(this.api + 'auth/refresh', apiOptions);
  }
}
