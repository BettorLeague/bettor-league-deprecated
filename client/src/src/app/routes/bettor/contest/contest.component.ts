import { Component, OnInit } from '@angular/core';
import {CompetitionModel} from "../../../shared/models/football/competition/competition.model";
import {ContestModel} from "../../../shared/models/bettor/contest.model";
import {CompetitionService} from "../../../shared/services/football/competition.service";
import {ContestService} from "../../../shared/services/bettor/contest.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../shared/services/auth/auth.service";


@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {

  selectedIndex: number = 0;
  totalTabs: number = 5;

  public contestId: number;

  constructor(private route: ActivatedRoute,
              public authService:AuthService,
              public competitionService:CompetitionService,
              public contestService:ContestService) { }

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
  }

  resetModel(){
    this.competitionService.currentCompetition = null;
    this.competitionService.currentTeamInCompetition = null;
    this.contestService.currentContest = null;
  }

  getContestById(){
    this.contestService.getPublicContestById(this.contestId).subscribe(data => {
      this.contestService.currentContest = data;
      this.getCompetitionById();
    })

  }

  getCompetitionById(){
    this.competitionService.getCompetitionById(this.contestService.currentContest.competitionId).subscribe(data => {
      this.competitionService.currentCompetition = data;
      this.getTeamInCompetition();
    })
  }

  getTeamInCompetition(){
    this.competitionService.getTeamsInCompetition(this.contestService.currentContest.competitionId).subscribe(data =>{
      this.competitionService.currentTeamInCompetition = data;
    })
  }
}
