import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from "../../shared/components/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { DividerModule } from "../../shared/components/divider/divider.module";



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule,
    DividerModule
  ],
})
export class MainModule { }
