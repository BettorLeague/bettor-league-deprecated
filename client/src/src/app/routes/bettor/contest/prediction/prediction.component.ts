import {Component, OnInit, ViewChild} from '@angular/core';
import {FixtureModel} from "../../../../shared/models/football/fixture/fixture.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CompetitionService} from "../../../../shared/services/football/competition.service";
import {CompetitionModel} from "../../../../shared/models/football/competition/competition.model";
import {MatSort} from "@angular/material";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {


  displayedColumns= ["date","result"];

  competitionId:number;
  competition:CompetitionModel;

  currentMatchday:number;
  currentMatch:FixtureModel[];

  onSearch = true;


  constructor(private route: ActivatedRoute,
              private competitionService:CompetitionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.competitionId = +params['contestId'];
      this.getCompetitionById();
    });
  }



  getCompetitionById(){
    this.competitionService.getCompetitionById(this.competitionId).subscribe(data => {
      this.competition = data;
      this.currentMatchday = this.competition.currentMatchday;
      this.getMatchByDay(this.competition.currentMatchday);

    })
  }

  getMatchByDay(day:number){
    this.onSearch = true;
    this.currentMatch = null;
    this.competitionService.getMatchFromCompetitionByIdAndMatchDay(this.competitionId,day).subscribe(data => {
      setTimeout(() => {
        this.currentMatch = data;
        this.currentMatchday = day;
        this.onSearch = false;
      },1000);
    })
  }

  getClass(teamName:string){
    return teamName.split(" ").join("_");

  }

}
