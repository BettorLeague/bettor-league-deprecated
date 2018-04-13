import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderService} from "../../shared/services/layout/header.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public headerService:HeaderService) { }

  ngOnInit() {
  }


}
