import { Component, OnInit } from '@angular/core';
import {CompetitionModel} from "../../../shared/models/football/competition/competition.model";
import {ContestModel} from "../../../shared/models/bettor/contest.model";
import {CompetitionService} from "../../../shared/services/football/competition.service";
import {ContestService} from "../../../shared/services/bettor/contest.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {

  selectedIndex: number = 0;
  totalTabs: number = 5;

  competition:CompetitionModel;
  contest:ContestModel;
  contestId: number;


  constructor(private route: ActivatedRoute,
              private competitionService:CompetitionService,
              private contestService:ContestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contestId = +params['contestId'];
      this.initModel();
    });
  }

  swipe(eType){
    if(eType === 'swipeleft' && this.selectedIndex < this.totalTabs){
      this.selectedIndex += 1;
    }
    else if (eType === 'swiperight' && this.selectedIndex > 0){
      this.selectedIndex -= 1;
    }
  }

  initModel(){
    this.resetModel();
    this.getContestById();
    this.getCompetitionById();
  }

  resetModel(){
    this.contest = null;
    this.competition = null;
  }

  getContestById(){
    this.contestService.getPublicContestById(this.contestId).subscribe(data => {
      this.contest = data;
    })
  }

  getCompetitionById(){
    this.competitionService.getCompetitionById(this.contest.competitionId).subscribe(data => {
      this.competition = data;
    })
  }



}
