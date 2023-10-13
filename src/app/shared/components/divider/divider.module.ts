import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HorizontalDividerComponent } from './horizontal-divider/horizontal-divider.component';
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    HorizontalDividerComponent
  ],
  exports: [
    HorizontalDividerComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule
  ]
})
export class DividerModule { }
