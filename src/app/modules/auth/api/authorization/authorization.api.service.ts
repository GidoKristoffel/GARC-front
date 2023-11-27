import { Injectable } from '@angular/core';
import { environment } from "../../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { IAuthorizationForm } from "../../interfaces/form.interface";
import { Observable } from "rxjs";
import { accessTokenResponse, statusApiResponse, } from "../../../../shared/interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {
  private readonly api: string = environment.api + '/user/';

  constructor(
    private http: HttpClient
  ) {}

  public logIn(form: IAuthorizationForm): Observable<accessTokenResponse> {
    return this.http.post<accessTokenResponse>(this.api + 'auth/login', form, {withCredentials: true});
  }

  public logOut(): Observable<statusApiResponse> {
    return this.http.get<statusApiResponse>(this.api + 'auth/logout', {withCredentials: true});
  }
}
