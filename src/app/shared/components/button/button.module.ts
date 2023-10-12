import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from './default-btn/default-btn.component';



@NgModule({
    declarations: [
        DefaultBtnComponent
    ],
    exports: [
        DefaultBtnComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ButtonModule { }
