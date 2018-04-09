import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

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
