import { HttpStatusCode } from "@angular/common/http";
import { TArtifactsCalculation } from "./common.inteface";

export interface IArtifactsCalculationResponse {
  artifactsCalculation: TArtifactsCalculation;
  status: HttpStatusCode;
}
