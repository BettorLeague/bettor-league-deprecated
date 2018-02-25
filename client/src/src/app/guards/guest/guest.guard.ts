import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from "../../shared/services/auth/auth.service";

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.currentUser) {
      this.router.navigate(['/profile']);
      return false;
    } else {
      return true;
    }
  }
}
