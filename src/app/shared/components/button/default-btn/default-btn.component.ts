import { Component, Input } from '@angular/core';
import { EBtnType } from "../../../../core/enums/btn-type.enum";

@Component({
  selector: 'tvt-default-btn',
  templateUrl: './default-btn.component.html',
  styleUrls: ['./default-btn.component.scss']
})
export class DefaultBtnComponent {
  @Input() type: EBtnType = EBtnType.Button;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}
