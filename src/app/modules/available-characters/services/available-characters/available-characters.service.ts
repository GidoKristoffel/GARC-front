import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IAvailableCharactersResponse } from "../../interfaces/api.interface";
import { AvailableCharactersApi } from "../../api/available-characters.api";
import { ICharacter, IUpdateAvailableCharacters } from "../../interfaces/common.inteface";

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

  public update(characterIds: IUpdateAvailableCharacters, callback: (characters: ICharacter[]) => void, error: () => void): void {
    this.availableCharactersApi
      .update(characterIds)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IAvailableCharactersResponse): void => {
        callback(response.availableCharacters);
      }, () => error());
  }
}
