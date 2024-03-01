import { Component, OnInit } from '@angular/core';
import { ICharacter } from "../../interfaces/common.inteface";
import { JsonPipe, NgForOf } from "@angular/common";
import { AvailableCharactersService } from "../../services/available-characters.service";
import { AvailableCharacterItemComponent } from "../available-character-item/available-character-item.component";
import { ButtonModule } from "../../../../shared/components/button/button.module";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'tvt-available-characters',
  standalone: true,
  imports: [
    AvailableCharacterItemComponent,
    NgForOf,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './available-characters.component.html',
  styleUrl: './available-characters.component.scss'
})
export class AvailableCharactersComponent  implements OnInit {
  public characters: ICharacter[] = [];
  public selected: string[] = [];
  public defaultSelected: string[] = [];
  public changed: boolean = false;

  constructor(
    private readonly availableCharactersService: AvailableCharactersService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.availableCharactersService.get((characters: ICharacter[]): void => {
      this.characters = characters;
      this.initSelected(this.characters);
    });
  }

  private initSelected(characters: ICharacter[]): void {
    this.defaultSelected = characters.filter((character: ICharacter) => character.available).map((character: ICharacter) => character.id).sort();
    this.selected = [...this.defaultSelected];
    console.log(this.defaultSelected);
  }

  public onToggle(add: boolean, id: string): void {
    if (add) {
      if (!this.selected.includes(id)) {
        this.selected.push(id);
      }
    } else {
      const index = this.selected.indexOf(id);
      if (index !== -1) {
        this.selected.splice(index, 1);
      }
    }
    this.selected = this.selected.sort();

    this.changed = JSON.stringify(this.selected) !== JSON.stringify(this.defaultSelected);
  }
}
