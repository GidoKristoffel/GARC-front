import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'tvt-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss']
})
export class SidebarBtnComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() link!: string;

  constructor(
    private router: Router
  ) {}

  public redirectTo(): void {
    if (this.link) {
      console.log(this.link);
      this.router.navigate([this.link]).then();
    }
  }
}
