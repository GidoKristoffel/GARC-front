import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiOptions } from "../../../core/constants/api.constant";
import { environment } from "../../../../environment/environment";
import { TUpdateArtifactsCalculation } from "../interfaces/common.inteface";
import { IArtifactsCalculationResponse } from "../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class ArtifactsCalculationApi {
  private readonly api: string = environment.api + '/client/calculation/artifacts';

  constructor(private http: HttpClient) {}

  public get(): Observable<IArtifactsCalculationResponse> {
    return this.http.get<IArtifactsCalculationResponse>(this.api, apiOptions);
  }

  public update(data: TUpdateArtifactsCalculation): Observable<IArtifactsCalculationResponse> {
    return this.http.post<IArtifactsCalculationResponse>(this.api, data, apiOptions);
  }
}
