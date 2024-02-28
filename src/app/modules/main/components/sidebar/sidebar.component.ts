import { Component } from '@angular/core';
import { SignService } from "../../../../core/services/sign/sign.service";
import { Sidebar } from "../../interfaces/sidebar";
import { sidebarData } from "../../data-structures/sidebar.structure";
import { EPage } from "../../../../core/enums/page.enum";
import { baseUrl } from "../../../../core/constants/route.constant";

@Component({
  selector: 'tvt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public readonly sidebar: Sidebar = sidebarData;
  public readonly settingsLink: string = baseUrl + EPage.Settings;

  constructor(
    private signService: SignService,
  ) {}

  public logOut(): void {
    this.signService.logOut();
  }
}
