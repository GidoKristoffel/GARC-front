import { Component } from '@angular/core';
import { LanguageModule } from "../../../modules/language/language.module";

@Component({
  selector: 'tvt-settings-page',
  templateUrl: './settings-page.component.html',
  standalone: true,
  imports: [
    LanguageModule
  ],
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {

}
