import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {RankingService} from "../../../../shared/services/football/ranking.service";
import {StandingModel} from "../../../../shared/models/football/ranking/standing.model";
import {FixtureModel} from "../../../../shared/models/football/fixture/fixture.model";
import {ActivatedRoute, Router} from "@angular/router";
import {fuseAnimations} from "../../../../../@fuse/animations";
import {CompetitionService} from "../../../../shared/services/football/competition.service";
import {ContestService} from "../../../../shared/services/bettor/contest.service";

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.scss'],
  animations   : fuseAnimations
})
export class RankingComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;


    displayedColumns = ['position', 'teamName', 'points', 'playedGames','wins','draws','losses', 'goals', 'goalsAgainst', 'goalDifference','forme'];
    ligue1Ranking = new MatTableDataSource();

    matchday: number;
    totalmatch:number[] = [];
    lastmatch:number;

    onSearch = true;

    constructor(private competitionService:CompetitionService,
                private contestService:ContestService,
                private rankingService: RankingService,
                private route: ActivatedRoute,
                private router: Router) {

      this.matchday = this.competitionService.currentCompetition.currentMatchday;
      this.getCurrentRanking();
    }

    ngOnInit() {}


    getCurrentRanking(){
      this.resetModel();
        this.rankingService.getCompetitionRanking(this.contestService.currentContest.competitionId).subscribe(data => {

            this.lastmatch = data.matchday;
            this.matchday = data.matchday;

            for(let i = 1; i <= this.matchday ; i++){
              this.totalmatch.push(i);
            }

            setTimeout(() => {
              let standings:StandingModel[] = data.standing;
              for(let standing of standings){
                this.get5LastMatchFromTeamAtMatchDayForAStanding(standing.team.id,this.matchday,standing);
              }
              this.ligue1Ranking.data =  standings;
              this.ligue1Ranking.sort = this.sort;
              this.onSearch = false;
            }, 1000);

        },
          error => {
            this.router.navigate(['/contest']);
          });
    }

    getRankingAtMatchDay(){
      this.resetModel();
        this.rankingService.getCompetitionRankingAtMatchDay(this.contestService.currentContest.competitionId, this.matchday).subscribe(data => {
            setTimeout(() => {
              let standings:StandingModel[] = data.standing;
              for(let standing of standings){
                this.get5LastMatchFromTeamAtMatchDayForAStanding(standing.team.id,this.matchday,standing);
              }
              this.ligue1Ranking.data =  standings;
              this.ligue1Ranking.sort = this.sort;
              this.onSearch = false;
            }, 1000);
        });
    }

    get5LastMatchFromTeamAtMatchDayForAStanding(teamId,matchDay,standing:StandingModel){
      const promise = this.rankingService.getLast5matchByCompetitionIdAndTeamIdAndMatchDay(this.contestService.currentContest.competitionId,teamId,this.matchday).subscribe(data =>{
        standing.last5match = data;
      });
      return promise;
    }


    resetModel(){
      this.onSearch = true;
      this.ligue1Ranking = new MatTableDataSource();
    }

    isTeamWinMatch(TeamName,match:FixtureModel){
      if(TeamName == match.homeTeamName){
        if(match.result.goalsHomeTeam > match.result.goalsAwayTeam){
          return "w";
        } else if (match.result.goalsHomeTeam == match.result.goalsAwayTeam) {
          return "d";
        }else return "l"
      }else{
        if(match.result.goalsHomeTeam > match.result.goalsAwayTeam){
          return "l"
        } else if (match.result.goalsHomeTeam == match.result.goalsAwayTeam) {
          return "d"
        }else return "w"
      }
    }

  getClass(teamName:string){
    return teamName.split(" ").join("_");
  }

  getCrestOfTeam(teamName:string){
      let result = null;
      this.competitionService.currentTeamInCompetition.forEach(team => {
        if(team.name == teamName) result = team.crestUrl;
      });
      console.log(result + teamName);
    return result;
  }


}
