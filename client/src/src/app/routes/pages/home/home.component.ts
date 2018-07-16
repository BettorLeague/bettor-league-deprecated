import { Component, OnInit } from '@angular/core';
import {ContestModel} from "../../../shared/models/bettor/contest.model";
import {ContestService} from "../../../shared/services/bettor/contest.service";
import {CompetitionService} from "../../../shared/services/football/competition.service";
import {CompetitionModel} from "../../../shared/models/football/competition/competition.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor() {

  }


  ngOnInit() {

  }

}
