import { Component, Input } from '@angular/core';

@Component({
  selector: 'tvt-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
