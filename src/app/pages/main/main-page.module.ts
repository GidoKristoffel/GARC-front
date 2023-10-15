import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from "./main-page.component";
import { MainModule } from "../../modules/main/main.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
    imports: [
        CommonModule,
        MainPageRoutingModule,
        MainModule
    ]
})
export class MainPageModule { }
