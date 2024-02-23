import { Component, OnInit } from '@angular/core';
import { LanguageService } from "./core/services/language/language.service";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'tvt-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'GARC-front';

  constructor(
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageService.init();
  }
}
