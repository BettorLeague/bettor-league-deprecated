import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ServicesModule} from './shared/services/services.module';

import { ROUTES } from './app.routes';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './routes/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './routes/user/user.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LoginComponent } from './routes/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './layout/header/header.component';
import {MaterialModule} from "./shared/components/material/material.module";
import {SidenavService} from "./shared/services/sideNav/sidenav.service";
import {GuardsModule} from "./guards/guards.module";
import {TokenInterceptor} from "./shared/services/http/TokenInterceptor";
import {AuthService} from "./shared/services/auth/auth.service";
import { ProfileComponent } from './routes/profile/profile.component';
import { UnauthorizeComponent } from './routes/unauthorize/unauthorize.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FooterComponent } from './layout/footer/footer.component';
import {ComponentsModule} from "./shared/components/components.module";

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
export function initUserFactory(authService: AuthService) {
    return () => authService.refreshUser();
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    UnauthorizeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    GuardsModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initUserFactory,
      deps: [AuthService],
      multi: true
    }
    ,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
