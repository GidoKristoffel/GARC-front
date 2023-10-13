import { Component, Input } from '@angular/core';

@Component({
  selector: 'tvt-horizontal-divider',
  templateUrl: './horizontal-divider.component.html',
  styleUrls: ['./horizontal-divider.component.scss']
})
export class HorizontalDividerComponent {
  @Input() label: string = '';
}
