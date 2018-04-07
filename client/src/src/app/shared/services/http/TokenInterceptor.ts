
import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpClient, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.auth.getToken();

    if (token != null){
      request = request.clone({
        setHeaders: { Authorization: `${token}`}
      });
    }else{
      request = request.clone();
    }

    return next.handle(request);
  }

}
