import { Component, OnInit } from '@angular/core';
import { LanguageService } from "./core/services/language/language.service";

@Component({
  selector: 'tvt-root',
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
