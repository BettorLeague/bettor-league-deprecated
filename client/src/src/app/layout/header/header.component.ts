import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material";
import {SidenavService} from "../../shared/services/sideNav/sidenav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  translate : TranslateService;

  constructor(
    private router: Router,
    private sidenavService: SidenavService,
    private authService: AuthService,
    private translateService: TranslateService) {

    this.translate = translateService;
    this.translate.langs
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
    this.router.navigate(['/']);
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  getCurrentUser(){
    return this.authService.currentUser;
  }



}
