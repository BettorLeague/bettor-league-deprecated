import {FuseSplashScreenService} from "./services/splash-screen.service";
import {NgModule} from "@angular/core";
import {FuseDirectivesModule} from "./directives/directives";


@NgModule({
  imports  : [
    FuseDirectivesModule
  ],
  providers: [
    FuseSplashScreenService
  ],
  exports  : [
    FuseDirectivesModule
  ]
})
export class FuseModule { }
