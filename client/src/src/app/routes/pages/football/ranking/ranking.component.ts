import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatPaginator } from '@angular/material';
import {RankingService} from "../../../../shared/services/football/ranking.service";

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

    ligue1Ranking: MatTableDataSource<any>;
    matchday: number;
    manualMatchday: number;
    matchdaysFinished = [];

    constructor(private rankingService: RankingService) {
        this.getLigue1CurrentRanking();
    }

    ngOnInit() {
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    getLigue1CurrentRanking(){
        this.rankingService.getCompetitionRanking(1).subscribe(data => {
            this.matchday = data.matchday;
            this.ligue1Ranking = new MatTableDataSource<any>(data.standing);
            for(let i = 0; i < this.matchday; i++){
                this.matchdaysFinished.push(i+1);
            }
        });
    }

    onPageChange(event){
        this.getLigue1RankingAtMatchDay(event.pageIndex);
    }

    updateManualPage(index) {
        this.manualMatchday = index;
        this.paginator.pageIndex = index - 1;
        this.getLigue1RankingAtMatchDay(this.manualMatchday);
    }

    getLigue1RankingAtMatchDay(matchday: number){
        this.rankingService.getCompetitionRankingAtMatchDay(1, matchday).subscribe(data => {
            this.ligue1Ranking = new MatTableDataSource<any>(data.standing);
        });
    }

}
