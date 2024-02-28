import { environment } from "../../../../environment/environment";
import { Observable } from "rxjs";
import { IAvailableCharactersResponse } from "../interfaces/api.interface";
import { HttpClient } from "@angular/common/http";
import { apiOptions } from "../../../core/constants/api.constant";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AvailableCharactersApi {
  private readonly api: string = environment.api + '/client/available-characters';

  constructor(private http: HttpClient) {}

  public get(): Observable<IAvailableCharactersResponse> {
    return this.http.get<IAvailableCharactersResponse>(this.api, apiOptions);
  }
}
