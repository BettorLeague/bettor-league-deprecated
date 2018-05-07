import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {ContestModel} from "../../models/bettor/contest.model";

@Injectable()
export class ContestService {


  currentContest:ContestModel;

  constructor(private http: HttpClient) { }

  public getAllPublicContest(): Observable<any>  {
    return this.http.get(`/api/bettor/contest/public`);
  }

  public getPublicContestById(contestId:number): Observable<any>  {
    return this.http.get(`/api/bettor/contest/public/${contestId}`);
  }

  getPlayerOfContest(contestId:number):Observable<any>{
    return this.http.get(`/api/bettor/contest/${contestId}/players/`);
  }


}
