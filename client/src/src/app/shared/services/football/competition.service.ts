import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {CompetitionModel} from "../../models/football/competition/competition.model";
import {ContestModel} from "../../models/bettor/contest.model";

@Injectable()
export class CompetitionService {

  currentCompetition:CompetitionModel;

  constructor(private http: HttpClient) { }

  public getCompetitionById(competitionId: Number): Observable<any>  {
    return this.http.get(`/api/competition/${competitionId}`);
  }

  public getMatchFromCompetitionByIdAndMatchDay(competitionId:number,day: Number): Observable<any>  {
    return this.http.get(`/api/competition/${competitionId}/match/${day}`);
  }

}
