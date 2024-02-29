import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IAvailableCharactersResponse } from "../interfaces/api.interface";
import { AvailableCharactersApi } from "../api/available-characters.api";
import { ICharacter } from "../interfaces/common.inteface";

@Injectable({
  providedIn: 'root'
})
export class AvailableCharactersService {

  constructor(
    private readonly availableCharactersApi: AvailableCharactersApi,
    private destroyRef: DestroyRef
  ) {}

  public get(callback: (characters: ICharacter[]) => void): void {
    this.availableCharactersApi
      .get()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IAvailableCharactersResponse): void => {
        callback(response.availableCharacters);
      });
  }
}
