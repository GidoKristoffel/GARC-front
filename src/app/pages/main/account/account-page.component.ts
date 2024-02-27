import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'tvt-account-page',
  templateUrl: './account-page.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent {

}
