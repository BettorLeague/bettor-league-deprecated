import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RankingService {

    constructor(private http: HttpClient) { }

    public getCompetitionRanking(id: Number): Observable<any>  {
        return this.http.get(`/api/competition/${id}/ranking`);
    }

    public getCompetitionRankingAtMatchDay(id: Number, matchday: Number): Observable<any> {
        return this.http.get(`/api/competition/${id}/ranking/${matchday}`);
    }

    public getLast5matchByCompetitionIdAndTeamIdAndMatchDay(competitionId:number,teamId:number,matchDay:number):Observable<any>{
      return this.http.get(`/api/competition/${competitionId}/last_5_match/${teamId}/${matchDay}`);

    }

}
