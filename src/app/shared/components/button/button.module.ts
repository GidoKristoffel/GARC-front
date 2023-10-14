import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from './default-btn/default-btn.component';
import { ExtendedFabBtnComponent } from './extended-fab-btn/extended-fab-btn.component';
import { SvgIconComponent } from "angular-svg-icon";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
    declarations: [
        DefaultBtnComponent,
        ExtendedFabBtnComponent
    ],
  exports: [
    DefaultBtnComponent,
    ExtendedFabBtnComponent
  ],
  imports: [
    CommonModule,
    SvgIconComponent,
    TranslateModule
  ]
})
export class ButtonModule { }
