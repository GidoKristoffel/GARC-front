import { Component, Input } from '@angular/core';
import { TArtifactsCalculation } from "../../interfaces/common.inteface";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'tvt-artifacts-calculation-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './artifacts-calculation-table.component.html',
  styleUrl: './artifacts-calculation-table.component.scss'
})
export class ArtifactsCalculationTableComponent {
  @Input() calculation: TArtifactsCalculation = [];
}
