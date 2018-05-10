import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material";
import {SidenavService} from "../../shared/services/layout/sidenav.service";
import {HeaderService} from "../../shared/services/layout/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  translate : TranslateService;
  routerService: Router;

  constructor(
    public headerService:HeaderService,
    private router: Router,
    public sidenavService: SidenavService,
    private authService: AuthService,
    private translateService: TranslateService) {

    this.translate = translateService;
    this.translate.langs;
    this.routerService = router;
    this.translateService.addLangs(["English", "French"]);
    this.translate.setDefaultLang('English');
    let browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/English|French/) ? browserLang : 'English');
  }

  ngOnInit() {
  }

  hasSignedIn() {
    return !!this.authService.currentUser;
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  getCurrentUser(){
    return this.authService.currentUser;
  }

  getContestUser(){
    return this.authService.currentUserContest;
  }






}
