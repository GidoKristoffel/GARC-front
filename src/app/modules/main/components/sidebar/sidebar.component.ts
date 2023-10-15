import { Component } from '@angular/core';
import { EPage } from "../../../../core/enums/page.enum";

@Component({
  selector: 'tvt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public readonly page: typeof EPage = EPage;
}
