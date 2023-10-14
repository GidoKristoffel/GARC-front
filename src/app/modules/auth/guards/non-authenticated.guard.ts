import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { EPage } from "../../../core/enums/page.enum";
import { SecurityService } from "../../../core/services/security/security.service";

@Injectable({
  providedIn: 'root'
})
export class NonAuthenticatedGuard  {
  constructor(private securityService: SecurityService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.securityService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate([EPage.Main]).then();
      return false;
    }
  }
}
