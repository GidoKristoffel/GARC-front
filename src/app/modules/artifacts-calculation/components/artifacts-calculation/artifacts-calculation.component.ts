import { Component, OnInit } from '@angular/core';
import {
  AvailableCharacterItemComponent
} from "../../../available-characters/components/available-character-item/available-character-item.component";
import { ButtonModule } from "../../../../shared/components/button/button.module";
import { NgForOf } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import {
  ArtifactsCalculationTableComponent
} from "../artifacts-calculation-table/artifacts-calculation-table.component";
import { TArtifactsCalculation } from "../../interfaces/common.inteface";
import { ArtifactsCalculationService } from "../../services/artifacts-calculation.service";

@Component({
  selector: 'tvt-artifacts-calculation',
  standalone: true,
  imports: [
    AvailableCharacterItemComponent,
    ButtonModule,
    NgForOf,
    TranslateModule,
    ArtifactsCalculationTableComponent
  ],
  templateUrl: './artifacts-calculation.component.html',
  styleUrl: './artifacts-calculation.component.scss'
})
export class ArtifactsCalculationComponent implements OnInit {
  public calculation: TArtifactsCalculation = [];

  constructor(private readonly artifactsCalculationService: ArtifactsCalculationService) {}

  ngOnInit(): void {
    this.getCalculation();
  }

  private getCalculation(): void {
    this.artifactsCalculationService.get((calculation: TArtifactsCalculation): void => {
      this.calculation = calculation;
    });
  }
}
