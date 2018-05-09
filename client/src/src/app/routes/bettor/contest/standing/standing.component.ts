import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";
import {ContestService} from "../../../../shared/services/bettor/contest.service";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
  animations   : fuseAnimations
})
export class StandingComponent implements OnInit {
  displayedColumns = ['Rank', 'Player', 'Points', 'GoodPrediction','ExactResult'];
  onSearch= true;
  players = new MatTableDataSource();

  constructor(public contestService:ContestService) {
    this.initModel();
  }

  ngOnInit() {
  }

  initModel(){
    this.resetModel();
    this.getPlayersInContest();
  }

  resetModel(){
    this.players = new MatTableDataSource();
    this.onSearch = true;
  }

  getPlayersInContest(){
    this.resetModel();
    this.contestService.getPlayerOfContest(this.contestService.currentContest.id).subscribe(data => {
      setTimeout(() => {
        this.players.data = data;
        this.onSearch = false;
      },1000);
    })
  }

}
