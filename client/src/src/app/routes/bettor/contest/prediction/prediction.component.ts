import { Component, OnInit } from '@angular/core';
import {CompetitionModel} from "../../../../shared/models/football/competition/competition.model";
import {FixtureModel} from "../../../../shared/models/football/fixture/fixture.model";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  displayedColumns= ["date","result","prediction"];

  competition:CompetitionModel;
  matchSemaine:FixtureModel[];

  constructor() { }

  ngOnInit() {
  }

}
