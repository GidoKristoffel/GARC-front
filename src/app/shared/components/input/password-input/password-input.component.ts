import { Component, Input } from '@angular/core';

@Component({
  selector: 'tvt-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
