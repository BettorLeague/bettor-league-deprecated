import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RankingService} from "../../../../shared/services/football/ranking.service";

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

    ligue1Ranking: MatTableDataSource<any>;
    matchday: number;

    constructor(private rankingService: RankingService) {
        this.getLigue1CurrentRanking();
    }

    ngOnInit() {
    }

    getLigue1CurrentRanking(){
        this.rankingService.getCompetitionRanking(1).subscribe(data => {
            this.matchday = data.matchday;
            this.ligue1Ranking = new MatTableDataSource<any>(data.standing);
        })
    }

    onPageChange(event){
        this.rankingService.getCompetitionRankingAtMatchDay(1, event.pageIndex).subscribe(data => {
            this.ligue1Ranking = new MatTableDataSource<any>(data.standing);
        })
    }

}
