import { Component, OnInit } from '@angular/core';
import { getEnumValues } from "../../../../core/utilities/enum.utility";
import { ELanguage } from "../../../../core/enums/language.enum";
import { LanguageService } from "../../../../core/services/language.service";

@Component({
  selector: 'tvt-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
  public languages: string[] = [];
  public selected!: string;

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.initCurrentLanguage();
    this.initLanguages();
  }

  private initCurrentLanguage(): void {
    this.selected = 'language.' + this.languageService.getCurrentLanguage();
  }

  private initLanguages(): void {
    this.languages = getEnumValues(ELanguage).map((language: ELanguage[keyof ELanguage]) => ('language.' + language));
  }

  public setLanguage(language: ELanguage): void {
    this.languageService.setLanguage(language);
  }
}
