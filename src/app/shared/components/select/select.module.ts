import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSelectComponent } from "./default-select/default-select.component";
import { TranslateModule } from "@ngx-translate/core";
import { SharedDirectivesModule } from "../../directives/shared-directives.module";
import { SvgIconComponent } from "angular-svg-icon";



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
        SharedDirectivesModule,
        SvgIconComponent
    ]
})
export class SelectModule { }
