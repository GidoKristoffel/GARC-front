import { Component } from '@angular/core';
import {
  AvailableCharactersComponent
} from "../../../../modules/available-characters/components/available-characters/available-characters.component";

@Component({
  selector: 'tvt-characters-page',
  templateUrl: './characters-page.component.html',
  standalone: true,
  imports: [
    AvailableCharactersComponent
  ],
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent {

}
