import { Component, Input } from '@angular/core';

@Component({
  selector: 'tvt-extended-fab-btn',
  templateUrl: './extended-fab-btn.component.html',
  styleUrls: ['./extended-fab-btn.component.scss']
})
export class ExtendedFabBtnComponent {
  @Input() label: string = '';
  @Input() src: string = '';
}
