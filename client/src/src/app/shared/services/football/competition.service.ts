import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CompetitionService {

  constructor(private http: HttpClient) { }

  public getCompetitionById(competitionId: Number): Observable<any>  {
    return this.http.get(`/api/competition/${competitionId}`);
  }

  public getMatchFromCompetitionByIdAndMatchDay(competitionId:number,day: Number): Observable<any>  {
    return this.http.get(`/api/competition/${competitionId}/match/${day}`);
  }


}
