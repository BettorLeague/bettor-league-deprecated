import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient ) { }

  getUser(): Observable<any> {
    return this.http.get(`/api/user`);
  }
  getUserContests(): Observable<any> {
    return this.http.get('/api/user/contest');
  }

  getUserStats(): Observable<any> {
    return this.http.get('/api/user/stats');
  }

}
