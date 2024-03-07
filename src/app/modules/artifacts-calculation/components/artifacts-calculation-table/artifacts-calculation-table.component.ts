import { Component, Input } from '@angular/core';
import { TArtifactsCalculation } from "../../interfaces/common.inteface";
import { NgForOf } from "@angular/common";
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'tvt-artifacts-calculation-table',
  standalone: true,
  imports: [
    NgForOf,
    DragDropModule
  ],
  templateUrl: './artifacts-calculation-table.component.html',
  styleUrl: './artifacts-calculation-table.component.scss'
})
export class ArtifactsCalculationTableComponent {
  @Input() calculation: TArtifactsCalculation = [];

  public onDrop($event: CdkDragDrop<any, any>): void {
    console.log($event);
  }
}
