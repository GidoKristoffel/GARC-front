import { HttpStatusCode } from "@angular/common/http";
import { ICharacter } from "./common.inteface";

export interface IAvailableCharactersResponse {
  availableCharacters: ICharacter[];
  status: HttpStatusCode;
}
