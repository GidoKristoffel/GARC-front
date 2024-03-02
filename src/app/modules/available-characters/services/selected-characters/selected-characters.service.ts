import { Injectable } from '@angular/core';
import { ICharacter, IUpdateAvailableCharacters } from "../../interfaces/common.inteface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SelectedCharactersService {
  private selected: string[] = [];
  private defaultSelected: string[] = [];
  private changed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public initDefault(characters: ICharacter[]): void {
    const available: ICharacter[] = characters.filter((character: ICharacter) => character.available);
    const ids: string[] = available.map((character: ICharacter) => character.id);
    const sorted: string[] = ids.sort();

    this.defaultSelected = sorted;
    this.selected = [...sorted];
    this.updateChanged();
  }

  public toggle(add: boolean, id: string): void {
    this.updateSelected(add, id);
    this.updateChanged();
  }

  public watchChanged(): BehaviorSubject<boolean> {
    return this.changed;
  }

  public get(): IUpdateAvailableCharacters {
    return {
      charactersToAdd: this.selected.filter((id: string) => !this.defaultSelected.includes(id)),
      charactersToRemove: this.defaultSelected.filter((id: string) => !this.selected.includes(id)),
    }
  }

  private updateSelected(add: boolean, id: string): void {
    if (add) {
      if (!this.selected.includes(id)) {
        this.selected.push(id);
      }
    } else {
      const index: number = this.selected.indexOf(id);
      if (index !== -1) {
        this.selected.splice(index, 1);
      }
    }
    this.selected = this.selected.sort();
  }

  private updateChanged(): void {
    const changed: boolean = JSON.stringify(this.selected) !== JSON.stringify(this.defaultSelected);
    this.changed.next(changed);
  }
}
