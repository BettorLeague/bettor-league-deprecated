import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginRequestModel} from "../../models/auth/login.request.model";
import {Observable} from "rxjs/Observable";
import {UserModel} from "../../models/user/user.model";
@Injectable()
export class UserService {


  constructor(private http: HttpClient) {
  }

  public allUser(): Observable<any> {
    return this.http.get('/api/user/all');
  }


}

