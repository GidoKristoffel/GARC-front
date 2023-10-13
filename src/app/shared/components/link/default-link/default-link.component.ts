import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'tvt-default-link',
  templateUrl: './default-link.component.html',
  styleUrls: ['./default-link.component.scss']
})
export class DefaultLinkComponent {
  @Input() label: string = '';
  @Input() src: string = '';

  constructor(
    private router: Router,
  ) {}

  public redirectTo(): void {
    this.router.navigate([this.src]).then();
  }
}
