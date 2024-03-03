import { Component } from '@angular/core';
import {
  ArtifactsCalculationComponent
} from "../../../../modules/artifacts-calculation/components/artifacts-calculation/artifacts-calculation.component";

@Component({
  selector: 'tvt-artifacts-page',
  templateUrl: './artifacts-page.component.html',
  standalone: true,
  imports: [
    ArtifactsCalculationComponent
  ],
  styleUrls: ['./artifacts-page.component.scss']
})
export class ArtifactsPageComponent {

}
