import { Component } from '@angular/core';
import { MainModule } from "../../modules/main/main.module";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'tvt-main-page',
  standalone: true,
  imports: [
    MainModule,
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {}
