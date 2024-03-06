import { Injectable } from '@angular/core';
import { ArtifactsCalculationApi } from "../api/artifacts-calculation.api";

@Injectable({
  providedIn: 'root'
})
export class ArtifactsCalculationService {

  constructor(private readonly api: ArtifactsCalculationApi) {}

  public get(): void {
    this.api.get();
  }
}
