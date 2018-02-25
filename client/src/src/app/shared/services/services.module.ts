import { NgModule } from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {UserService} from "./user/user.service";

@NgModule({
  providers: [
    AuthService,
    UserService
  ]
})
export class ServicesModule { }
