import { Component, OnInit } from '@angular/core';
import { getEnumValues, isStringInEnum } from "../../../../core/utilities/enum.utility";
import { ELanguage } from "../../../../core/enums/language.enum";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IOption } from "../../../../shared/interfaces/select.interface";

@Component({
  selector: 'tvt-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
  public languages: IOption[] = [];
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
    this.languages =
      getEnumValues(ELanguage)
        .map((language: ELanguage[keyof ELanguage]): IOption => {
          return {
            label: 'language.' + language,
            value: String(language)
          }
        });
  }

  public setLanguage(language: string): void {
    if (isStringInEnum(language, ELanguage)) {
      this.languageService.setLanguage(language as ELanguage);
    }
  }
}
