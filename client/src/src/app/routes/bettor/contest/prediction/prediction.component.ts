import {Component, OnInit, ViewChild} from '@angular/core';
import {FixtureModel} from "../../../../shared/models/football/fixture/fixture.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CompetitionService} from "../../../../shared/services/football/competition.service";
import {CompetitionModel} from "../../../../shared/models/football/competition/competition.model";
import {MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from '@angular/cdk/collections';
import {fuseAnimations} from "../../../../../@fuse/animations";
import {ContestService} from "../../../../shared/services/bettor/contest.service";
import {AuthService} from "../../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss'],
  animations   : fuseAnimations
})
export class PredictionComponent implements OnInit {
  onPredict = false;
  predictColumns = ["Select","Day","HomeTeam","HomeScore","AwayScore","AwayTeam","Info"];
  displayedColumns= ["date","result"];

  onSearch = true;
  selectedDay:number;
  selectedMatch;


  selectionMatch = new SelectionModel<FixtureModel>(true, []);



  constructor(
              public authService:AuthService,
              public contestService:ContestService,
              public competitionService:CompetitionService) {
    this.selectedDay = this.competitionService.currentCompetition.currentMatchday;
    this.getMatchByDay();
  }

  ngOnInit() {}

  resetModel(){
    this.onSearch = true;
    this.selectedMatch = new MatTableDataSource<FixtureModel>();
  }

  getMatchByDay(){
    this.resetModel();
    this.competitionService.getMatchFromCompetitionByIdAndMatchDay(this.contestService.currentContest.competitionId,this.selectedDay).subscribe(data => {
      setTimeout(() => {
        this.selectedMatch.data = data;
        this.onSearch = false;
      },1000);
    });
  }

  getClass(teamName:string){
    return teamName.split(" ").join("_");

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectionMatch.selected.length;
    const numRows = this.selectedMatch.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selectionMatch.clear() :
      this.selectedMatch.data.forEach(row => this.selectionMatch.select(row));
  }

  getCrestOfTeam(teamName:string){
    let result = null;
    this.competitionService.currentTeamInCompetition.forEach(team => {
      if(team.name == teamName) result = team.crestUrl;
    });
    return result;
  }



}
