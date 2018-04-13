import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import {Router} from "@angular/router";
import {SplashScreenService} from "../../../../@fuse/services/splash-screen.service";

@Injectable()
export class HeaderService {

  constructor(private router: Router) {}

  isOpen():boolean{
    if (
      !this.router.url.includes('login') &&
      !this.router.url.includes('mail-confirm') &&
      !this.router.url.includes('403') &&
      !this.router.url.includes('404') &&
      !this.router.url.includes('forgot-password') &&
      !this.router.url.includes('register')){
      return true;
    }
    return false;
  }

}
