import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {CompetitionModel} from "../../models/football/competition/competition.model";
import {ContestModel} from "../../models/bettor/contest.model";
import {TeamModel} from "../../models/football/ranking/team.model";

@Injectable()
export class CompetitionService {

  currentCompetition: CompetitionModel;
  currentTeamInCompetition: TeamModel[];

  constructor(private http: HttpClient) { }

  public getAllCompetition(): Observable <any> {
    return this.http.get('/api/competition');
  }

  public getCompetitionById(competitionId: number): Observable<any>  {
    return this.http.get(`/api/competition/${competitionId}`);
  }

  public getMatchFromCompetitionByIdAndMatchDay(competitionId: number, day: Number): Observable<any>  {
    return this.http.get(`/api/competition/${competitionId}/match/${day}`);
  }

  public getTeamsInCompetition(competitionId: number): Observable<any>{
    return this.http.get(`/api/competition/${competitionId}/teams`);
  }

}
