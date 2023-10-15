import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

@Component({
  selector: 'tvt-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss']
})
export class SidebarBtnComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() link!: EPage;

  constructor(
    private router: Router
  ) {}

  public redirectTo(): void {
    if (this.link) {
      this.router.navigate([this.link]).then();
    }
  }
}
