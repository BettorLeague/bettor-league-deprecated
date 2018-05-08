import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginRequestModel} from "../../models/auth/login.request.model";
import {UserModel} from "../../models/user/user.model";
import {UserTokenModel} from "../../models/auth/user.token.model";
import {RegisterRequestModel} from "../../models/auth/register.request.model";
import {CookieService} from "ngx-cookie-service";
import {ContestService} from "../bettor/contest.service";
import {ContestModel} from "../../models/bettor/contest.model";

@Injectable()
export class AuthService {

  currentUser : UserModel = new UserModel();
  currentUserContest:ContestModel[] = [];

  constructor(private http: HttpClient,private cookieService: CookieService) {
  }

  public login(loginRequest: LoginRequestModel): Observable<any> {
    return this.http.post('/auth/login',loginRequest);
  }

  public signup(signupRequest: RegisterRequestModel): Observable<any> {
    return this.http.post('/auth/signup',signupRequest);
  }

  public refresh(): Observable<any> {
    return this.http.get('auth/refresh');
  }

  public getCurrentUser() : Observable<any> {
    return this.http.get('auth/user');
  }

  public getContestPlayed(userId:number):Observable<any>{
    return this.http.get(`api/user/${userId}/contest`);
  }


  public logout(): void{
    localStorage.removeItem('TOKEN_KEY');
    this.cookieService.delete("Authorization");
    this.currentUser = null;
    this.currentUserContest = null;
  }


  refreshUser() {
    if(this.getToken() != null){
      const promise = this.refresh().toPromise()
        .then(res => {
          if (res !== null) {
            localStorage.setItem('TOKEN_KEY', res.token);
            return this.getCurrentUser().toPromise()
              .then(user => {
                this.currentUser = user;
                this.initUserContest();
              });
          }
        })
        .catch(() => null);
      return promise;
    }
    return null;
  }

  initUser(){
    const promise = this.getCurrentUser().toPromise().then(data =>{
      this.currentUser = data;
      this.initUserContest();
    }).catch();
    return promise;
  }

  haveAdminAuth() : boolean{
    return JSON.stringify(this.currentUser.authorities).search('ROLE_ADMIN') !== -1 ;
  }

  haveUserAuth() : boolean{
    return JSON.stringify(this.currentUser.authorities).search('ROLE_USER') !== -1 ;
  }

  public getToken(): string {
    const header = localStorage.getItem('TOKEN_KEY');
    const cookie = this.cookieService.get("Authorization");
    let token = null;
    if(header){
      token = header;
    }else if (cookie) {
      token = cookie;
    }

    return token;
  }

  public setToken(token):void{
    localStorage.setItem('TOKEN_KEY', token);
  }


  initUserContest(){
    const promise = this.getContestPlayed(this.currentUser.id).toPromise().then(data =>{
      this.currentUserContest = data;
    }).catch();
    return promise;
  }


}
