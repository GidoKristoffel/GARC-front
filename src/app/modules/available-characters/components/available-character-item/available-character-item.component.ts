import { Component, Input } from '@angular/core';
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
export class AvailableCharacterItemComponent {
  @Input() character!: ICharacter;
  @Input() currentLang: ELanguage = ELanguage.English;
}
