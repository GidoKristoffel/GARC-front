import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { TranslateModule } from "@ngx-translate/core";
import { SelectModule } from "../../shared/components/select/select.module";

@NgModule({
    declarations: [
        LanguagePickerComponent
    ],
    exports: [
        LanguagePickerComponent
    ],
  imports: [
    CommonModule,
    TranslateModule,
    SelectModule
  ]
})
export class LanguageModule { }
