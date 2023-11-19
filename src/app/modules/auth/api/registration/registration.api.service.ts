import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IRegistrationFormValue } from "../../interfaces/form.interface";
import { Observable } from "rxjs";
import { environment } from "../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {
  private readonly api: string = environment.api + '/';

  constructor(
    private http: HttpClient
  ) {}

  public register(form: IRegistrationFormValue): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.api + 'auth/registration', form, { headers: headers });
  }
}
