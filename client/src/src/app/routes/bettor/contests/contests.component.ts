import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from "../../../../@fuse/animations";
import {ContestService} from "../../../shared/services/bettor/contest.service";
import {ContestModel} from "../../../shared/models/bettor/contest.model";
import {CompetitionModel} from "../../../shared/models/football/competition/competition.model";
import {CompetitionService} from "../../../shared/services/football/competition.service";

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss'],
  animations   : fuseAnimations
})
export class ContestsComponent implements OnInit {

  publicContests:ContestModel[];
  competitions:CompetitionModel[];
  onSearch = true;

  constructor(private contestService:ContestService,
              private competitionService:CompetitionService) {
    this.initModel();
  }

  ngOnInit() {
  }

  resetModel(){
    this.publicContests = [];
    this.onSearch = true;
  }

  initModel(){
    this.resetModel();
    this.getAllPublicContest();
  }

  getAllPublicContest(){
    this.resetModel();
    this.contestService.getAllPublicContest().subscribe(data => {
      setTimeout(() => {
        this.publicContests = data;
        this.competitions = [];
        this.publicContests.forEach(contest => {
          this.getCompetitionById(contest.competitionId);
          this.getPlayerOfContest(contest);
        });
        this.onSearch = false;
      },1000);
    })
  }

  getCompetitionById(competitionId){
    this.competitionService.getCompetitionById(competitionId).subscribe(data => {
      this.competitions.push(data);
    })
  }

  getPlayerOfContest(contest:ContestModel){
    this.contestService.getPlayerOfContest(contest.id).subscribe(data =>{
      contest.nbParticipant = data.length;
    })
  }


  competitionFromContest(contest:ContestModel):CompetitionModel{
    let result: CompetitionModel = new CompetitionModel();
    this.competitions.forEach(competition => {
      if (contest.competitionId == competition.id){
        result = competition;
      }
    });
    return result;
  }

}
