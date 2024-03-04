import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IAvailableCharactersResponse } from "../../available-characters/interfaces/api.interface";
import { apiOptions } from "../../../core/constants/api.constant";
import { environment } from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ArtifactsCalculationApi {
  private readonly api: string = environment.api + '/client/calculation/artifacts';

  constructor(private http: HttpClient) {}

  public get(): Observable<IArtifactsCalculationResponse> {
    return this.http.get<IArtifactsCalculationResponse>(this.api, apiOptions);
  }

  public update(data: IUpdateArtifactsCalculation): Observable<IArtifactsCalculationResponse> {
    return this.http.post<IArtifactsCalculationResponse>(this.api, data, apiOptions);
  }
}
