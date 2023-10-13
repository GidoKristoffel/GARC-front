import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLinkComponent } from './default-link/default-link.component';
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    DefaultLinkComponent
  ],
  exports: [
    DefaultLinkComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class LinkModule { }
