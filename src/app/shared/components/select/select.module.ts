import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSelectComponent } from "./default-select/default-select.component";
import { TranslateModule } from "@ngx-translate/core";
import { SharedDirectivesModule } from "../../directives/shared-directives.module";



@NgModule({
  declarations: [
    DefaultSelectComponent
  ],
  exports: [
    DefaultSelectComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedDirectivesModule
  ]
})
export class SelectModule { }
