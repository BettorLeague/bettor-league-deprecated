import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
@Injectable()
export class UserService {


  constructor(private http: HttpClient) {}

  public allUser(): Observable<any> {
    return this.http.get('/api/user/all');
  }


}

