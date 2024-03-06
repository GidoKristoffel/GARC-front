import { DestroyRef, Injectable } from '@angular/core';
import { ArtifactsCalculationApi } from "../api/artifacts-calculation.api";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IArtifactsCalculationResponse } from "../interfaces/api.interfaces";
import { TArtifactsCalculation } from "../interfaces/common.inteface";

@Injectable({
  providedIn: 'root'
})
export class ArtifactsCalculationService {

  constructor(private readonly api: ArtifactsCalculationApi, private destroyRef: DestroyRef) {}

  public get(callback: (response: TArtifactsCalculation) => void): void {
    this.api
      .get()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IArtifactsCalculationResponse): void => {
        callback(response.artifactsCalculation);
      });
  }
}
