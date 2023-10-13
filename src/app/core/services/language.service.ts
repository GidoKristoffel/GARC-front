import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ELanguage } from "../enums/language.enum";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate: TranslateService
  ) {}

  public init(): void {
    this.translate.setDefaultLang(ELanguage.English);
    this.translate.use(ELanguage.English);
  }

  public getCurrentLanguage(): ELanguage {
    return this.translate.currentLang as ELanguage;
  }

  public setLanguage(language: ELanguage): void {
    this.translate.use(language);
  }
}
