import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
  animations   : fuseAnimations
})
export class StandingComponent implements OnInit {
  displayedColumns = ['Rank', 'Player', 'Points', 'GoodPrediction','ExactResult'];

  constructor() { }

  ngOnInit() {
  }

}
