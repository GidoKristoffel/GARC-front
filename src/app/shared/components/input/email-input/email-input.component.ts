import { Component, Input } from '@angular/core';
import { createMask } from "@ngneat/input-mask";

@Component({
  selector: 'tvt-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';

  public emailInputMask = createMask({ alias: 'email' });
}
