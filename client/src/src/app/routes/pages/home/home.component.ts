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

  publicContests:ContestModel[];
  competitions:CompetitionModel[];

  constructor(private contestService:ContestService,
              private competitionService:CompetitionService) {
    this.initModel();
  }


  ngOnInit() {

  }

  resetModel(){
    this.publicContests = [];
  }

  initModel(){
    this.resetModel();
    this.getAllPublicContest();
  }

  getAllPublicContest(){
    this.resetModel();
    this.contestService.getAllPublicContest().subscribe(data => {
        this.publicContests  = data;
        this.competitions = [];
        this.publicContests.forEach(contest => {
          this.getCompetitionById(contest.competitionId);
        });
    })
  }

  getCompetitionById(competitionId){
    this.competitionService.getCompetitionById(competitionId).subscribe(data => {
      this.competitions.push(data);
    })
  }
}
