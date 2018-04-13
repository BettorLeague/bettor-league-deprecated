import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {TranslateService} from "@ngx-translate/core";
import {SidenavService} from "./shared/services/layout/sidenav.service";
import {SplashScreenService} from "../@fuse/services/splash-screen.service";
import {Router} from "@angular/router";
import {HeaderService} from "./shared/services/layout/header.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private router: Router,
    public headerService:HeaderService,
    private splashScreenService: SplashScreenService,
    private sidenavService : SidenavService
  ) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }







}
