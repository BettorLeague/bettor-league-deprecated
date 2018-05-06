import {Component, OnInit, ViewChild} from '@angular/core';
import {FixtureModel} from "../../../../shared/models/football/fixture/fixture.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CompetitionService} from "../../../../shared/services/football/competition.service";
import {CompetitionModel} from "../../../../shared/models/football/competition/competition.model";
import {MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  onPredict = false;
  predictColumns = ["Select","Day","HomeTeam","HomeScore","AwayScore","AwayTeam","Info"];

  displayedColumns= ["date","result"];

  competitionId:number;
  competition:CompetitionModel;

  currentMatchday:number;
  currentMatch = null;
  selectionMatch = new SelectionModel<FixtureModel>(true, []);

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
        this.currentMatch = new MatTableDataSource<FixtureModel>(data);
        this.currentMatchday = day;
        this.onSearch = false;
      },1000);
    })
  }

  getClass(teamName:string){
    return teamName.split(" ").join("_");

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    console.log(this.currentMatch)
    const numSelected = this.selectionMatch.selected.length;
    const numRows = this.currentMatch.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selectionMatch.clear() :
      this.currentMatch.data.forEach(row => this.selectionMatch.select(row));
  }

}
