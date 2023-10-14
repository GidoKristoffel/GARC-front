import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from "../services/security/security.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private securityService: SecurityService,
  ) {}

  intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    const authToken = this.securityService.getAuthToken();

    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` },
    });

    return next.handle(authRequest);
  }
}
