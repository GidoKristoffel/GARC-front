import { Component, OnInit } from '@angular/core';
import { ICharacter } from "../../interfaces/common.inteface";
import { JsonPipe, NgForOf } from "@angular/common";
import { AvailableCharactersService } from "../../services/available-characters.service";
import { AvailableCharacterItemComponent } from "../available-character-item/available-character-item.component";

@Component({
  selector: 'tvt-available-characters',
  standalone: true,
  imports: [
    JsonPipe,
    AvailableCharacterItemComponent,
    NgForOf
  ],
  templateUrl: './available-characters.component.html',
  styleUrl: './available-characters.component.scss'
})
export class AvailableCharactersComponent  implements OnInit {
  public characters: ICharacter[] = [];

  constructor(
    private readonly availableCharactersService: AvailableCharactersService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.availableCharactersService.get((characters: ICharacter[]) => {
      this.characters = characters;
    });
  }
}
