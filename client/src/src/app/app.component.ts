import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {TranslateService} from "@ngx-translate/core";
import {SidenavService} from "./shared/services/layout/sidenav.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private sidenavService : SidenavService
  ) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }






}
