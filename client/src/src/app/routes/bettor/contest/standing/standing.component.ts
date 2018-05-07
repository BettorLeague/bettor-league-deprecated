import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent implements OnInit {
  displayedColumns = ['Rank', 'Player', 'Points', 'GoodPrediction','ExactResult'];

  constructor() { }

  ngOnInit() {
  }

}
