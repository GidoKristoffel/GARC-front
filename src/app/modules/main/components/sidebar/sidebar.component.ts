import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";
import { SignService } from "../../../../core/services/sign/sign.service";

@Component({
  selector: 'tvt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public readonly baseUrl: string = EPage.Main + '/';
  public readonly baseUrlAccount: string = EPage.Main + '/' + EPage.Account + '/';
  public readonly baseUrlCalculation: string = EPage.Main + '/' + EPage.Calculation + '/';
  public readonly page = {
    dashboard: this.baseUrl + EPage.Dashboard,
    profile: this.baseUrlAccount + EPage.Profile,
    accountWeapons: this.baseUrlAccount + EPage.AccountWeapons,
    materials: this.baseUrlAccount + EPage.Materials,
    artifacts: this.baseUrlCalculation + EPage.Artifacts,
    talents: this.baseUrlCalculation + EPage.Talents,
    weapons: this.baseUrlCalculation + EPage.Weapons,
    settings: this.baseUrl + EPage.Settings,
  };

  constructor(
    private signService: SignService,
  ) {}

  public logOut(): void {
    this.signService.logOut();
  }
}
