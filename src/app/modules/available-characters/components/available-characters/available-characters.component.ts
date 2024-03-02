import { Component, DestroyRef, OnInit } from '@angular/core';
import { ICharacter, IUpdateAvailableCharacters } from "../../interfaces/common.inteface";
import { JsonPipe, NgForOf } from "@angular/common";
import { AvailableCharactersService } from "../../services/available-characters/available-characters.service";
import { AvailableCharacterItemComponent } from "../available-character-item/available-character-item.component";
import { ButtonModule } from "../../../../shared/components/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { SelectedCharactersService } from "../../services/selected-characters/selected-characters.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

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
  public changed: boolean = false;
  public loading: boolean = false;

  constructor(
    private readonly availableCharactersService: AvailableCharactersService,
    private readonly selectedCharactersService: SelectedCharactersService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.getCharacters();
    this.watchChanged();
  }

  private getCharacters(): void {
    this.availableCharactersService.get((characters: ICharacter[]): void => {
      this.characters = characters;
      this.initSelected(this.characters);
    });
  }

  private initSelected(characters: ICharacter[]): void {
    this.selectedCharactersService.initDefault(characters);
  }

  public onToggle(add: boolean, id: string): void {
    this.selectedCharactersService.toggle(add, id);
  }

  private watchChanged(): void {
    this.selectedCharactersService
      .watchChanged()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((changed: boolean): void => {
        this.changed = changed;
      });
  }

  public save(): void {
    this.loading = true;
    const characterIds: IUpdateAvailableCharacters = this.selectedCharactersService.get();
    this.availableCharactersService.update(characterIds, (characters: ICharacter[]): void => {
      this.characters = characters;
      this.initSelected(this.characters);
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
}
