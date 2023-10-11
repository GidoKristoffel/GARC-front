import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactsPageRoutingModule } from './artifacts-page-routing.module';
import { ArtifactsPageComponent } from './artifacts-page.component';


@NgModule({
  declarations: [
    ArtifactsPageComponent
  ],
  imports: [
    CommonModule,
    ArtifactsPageRoutingModule
  ]
})
export class ArtifactsPageModule { }
