import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {ContestModel} from "../../models/bettor/contest.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class ContestService {


  currentContest: ContestModel;

  constructor(private http: HttpClient) { }

  public getAllPublicContest(): Observable<any>  {
    return this.http.get(`/api/contest`);
  }

  public getPublicContestById(contestId: number): Observable<any>  {
    return this.http.get(`/api/contest/${contestId}`);
  }

  public getPlayerOfContest(contestId: number): Observable<any> {
    return this.http.get(`/api/contest/${contestId}/players`);
  }

  public getContestPlayed(userId: number): Observable<any> {
    return this.http.get(`/api/user/${userId}/contest`);
  }

  public getNbPlayersContest(contestId: number): Observable<any> {
    return this.http.get(`/api/contest/${contestId}/nbPlayers`);
  }

  public createNewPrivateContest(competitionId: number, caption: string) {
    return this.http.post(`/api/user/contest`, {
      competitionId,
      caption
    });
  }
}
