
import {NgModule} from "@angular/core";
import {FuseDirectivesModule} from "./directives/directives";
import {SplashScreenService} from "./services/splash-screen.service";


@NgModule({
  imports  : [
    FuseDirectivesModule
  ],
  providers: [
    SplashScreenService
  ],
  exports  : [
    FuseDirectivesModule
  ]
})
export class FuseModule { }
