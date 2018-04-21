import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginator } from '@angular/material';
import {RankingService} from "../../../../shared/services/football/ranking.service";
import {StandingModel} from "../../../../shared/models/football/ranking/standing.model";

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = ['position', 'teamName', 'points', 'playedGames','wins','draws','losses', 'goals', 'goalsAgainst', 'goalDifference'];
    ligue1Ranking = new MatTableDataSource();

    matchday: number;
    totalmatch:number[] = [];
    lastmatch:number;

    onSearch = true;

    constructor(
      private rankingService: RankingService) {
        this.getLigue1CurrentRanking();
    }

    ngOnInit() {

    }


    getLigue1CurrentRanking(){
      this.resetModel();
        this.rankingService.getCompetitionRanking(1).subscribe(data => {
            this.lastmatch = data.matchday;
            this.matchday = data.matchday;
            for(let i = 1; i <= this.matchday ; i++){
              this.totalmatch.push(i);
            }
            setTimeout(() => {
              this.ligue1Ranking.data =  data.standing;
              this.ligue1Ranking.sort = this.sort;
              this.onSearch = false;
            }, 1000);
        });
    }

    getLigue1RankingAtMatchDay(){
      this.resetModel();
        this.rankingService.getCompetitionRankingAtMatchDay(1, this.matchday).subscribe(data => {
            setTimeout(() => {
              this.ligue1Ranking.data =  data.standing;
              this.ligue1Ranking.sort = this.sort;
              this.onSearch = false;
            }, 1000);
        });
    }


    resetModel(){
      this.onSearch = true;
      this.ligue1Ranking = new MatTableDataSource();
    }

}
