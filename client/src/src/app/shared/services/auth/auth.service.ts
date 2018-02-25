import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginRequestModel} from "../../models/auth/login.request.model";
import {UserModel} from "../../models/user/user.model";
import {UserTokenModel} from "../../models/auth/user.token.model";

@Injectable()
export class AuthService {

  currentUser : UserModel;

  constructor(private http: HttpClient) {
  }

  public login(loginRequest: LoginRequestModel): Observable<any> {
    return this.http.post('/auth/login',loginRequest);
  }

  public refresh(): Observable<any> {
    return this.http.get('auth/refresh');
  }

  public getCurrentUser() : Observable<any> {
    return this.http.get('auth/user');
  }

  public logout(): void{
    localStorage.removeItem('TOKEN_KEY');
    this.currentUser = null;
  }


  refreshUser() {

    const promise = this.refresh().toPromise()
      .then(res => {
        if (res !== null) {
          localStorage.setItem('TOKEN_KEY', res.token);
          return this.getCurrentUser().toPromise()
            .then(user => {
              this.currentUser = user;
            });
        }
      })
      .catch(() => null);
    return promise;


  }

  initUser(){
    const promise = this.getCurrentUser().toPromise().then(data =>{
      this.currentUser = data;
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
    return localStorage.getItem('TOKEN_KEY');
  }

  public setToken(token):void{
    localStorage.setItem('TOKEN_KEY', token);
  }

  public getloggedUser():UserModel{
    return this.currentUser;
  }



}
