import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RankingModel} from '../../../../shared/models/football/ranking.model';
import {RankingService} from "../../../../shared/services/football/ranking.service";

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

    ligue1Ranking: MatTableDataSource<any>;

    constructor(private rankingService: RankingService) {
        this.getLigue1Ranking();
    }

    ngOnInit() {
    }

    getLigue1Ranking(){
        this.rankingService.getCompetitionRanking(1).subscribe(data => {
            console.log(data.standing);
            this.ligue1Ranking = new MatTableDataSource<any>(data.standing);
        })
    }

}
