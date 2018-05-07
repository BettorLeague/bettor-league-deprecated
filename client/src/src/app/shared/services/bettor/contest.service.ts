import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ContestService {

  constructor(private http: HttpClient) { }

  public getAllPublicContest(): Observable<any>  {
    return this.http.get(`api/bettor/contest/public`);
  }

  public getPublicContestById(contestId:number): Observable<any>  {
    return this.http.get(`api/bettor/contest/public/${contestId}`);
  }


}
