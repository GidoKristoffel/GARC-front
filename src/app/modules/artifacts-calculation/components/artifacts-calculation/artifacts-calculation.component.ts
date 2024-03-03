import { Component } from '@angular/core';
import {
  AvailableCharacterItemComponent
} from "../../../available-characters/components/available-character-item/available-character-item.component";
import { ButtonModule } from "../../../../shared/components/button/button.module";
import { NgForOf } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'tvt-artifacts-calculation',
  standalone: true,
  imports: [
    AvailableCharacterItemComponent,
    ButtonModule,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './artifacts-calculation.component.html',
  styleUrl: './artifacts-calculation.component.scss'
})
export class ArtifactsCalculationComponent {

}
