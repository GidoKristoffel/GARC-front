import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICharacter } from "../../interfaces/common.inteface";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { ELanguage } from "../../../../core/enums/language.enum";

@Component({
  selector: 'tvt-available-character-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './available-character-item.component.html',
  styleUrl: './available-character-item.component.scss'
})
export class AvailableCharacterItemComponent implements OnChanges {
  @Input() character!: ICharacter;
  @Input() currentLang: ELanguage = ELanguage.English;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public selected: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes && changes['character']) {
      this.initSelected(changes['character'].currentValue.available);
    }
  }

  private initSelected(value: boolean): void {
    this.selected = value;
  }

  public onToggle(): void {
    this.selected = !this.selected;
    this.toggle.emit(this.selected);
  }
}
