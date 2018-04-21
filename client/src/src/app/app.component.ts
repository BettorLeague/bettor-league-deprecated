import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SidenavService} from "./shared/services/layout/sidenav.service";
import {SplashScreenService} from "../@fuse/services/splash-screen.service";
import {NavigationEnd, Router} from "@angular/router";
import {HeaderService} from "./shared/services/layout/header.service";
import {FusePerfectScrollbarDirective} from "../@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[FusePerfectScrollbarDirective]
})
export class AppComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('sidenav2') notifSidenav: MatSidenav;

  constructor(
    private router: Router,
    public headerService:HeaderService,
    private splashScreenService: SplashScreenService,
    private sidenavService : SidenavService
  ) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.sidenavService.setNotifSidenav(this.notifSidenav);

  }

  onDeactivate(param) {
    param.scrollTop = 0;
  }







}
