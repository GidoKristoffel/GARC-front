import { Component, DestroyRef, OnInit } from '@angular/core';
import { AvailableCharactersApi } from "../../api/available-characters.api";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IAvailableCharactersResponse } from "../../interfaces/api.interface";
import { ICharacter } from "../../interfaces/common.inteface";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'tvt-available-characters',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './available-characters.component.html',
  styleUrl: './available-characters.component.scss'
})
export class AvailableCharactersComponent  implements OnInit {
  public characters: ICharacter[] = [];

  constructor(
    private readonly availableCharactersApi: AvailableCharactersApi,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.availableCharactersApi
      .get()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IAvailableCharactersResponse): void => {
        this.characters = response.availableCharacters;
      });
  }
}
