import { provideRouter } from "@angular/router";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "./app.module";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";
import { routes } from "./app.routes";

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
  ],
};
