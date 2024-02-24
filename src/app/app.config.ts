import { provideRouter } from "@angular/router";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";
import { routes } from "./app.routes";
import { provideAngularSvgIcon } from "angular-svg-icon";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      }),
    ),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideAngularSvgIcon(),
  ],
};
