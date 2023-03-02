import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { AuthInterceptor } from "./app/interceptors/auth.interceptor";
import * as Routes from './app/routes/routes'
import { provideHttpClient } from '@angular/common/http'

bootstrapApplication(AppComponent,{
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot([
        Routes.defaultRoute,
        Routes.c1Route,
        Routes.c2Route,
        Routes.c3Route
      ]),
      FormsModule
    )
  ]
})