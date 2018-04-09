
import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpClient, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../auth/auth.service";
import 'rxjs/add/operator/do';
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;

  constructor(public auth: AuthService,
              private dialog: MatDialog,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.auth.getToken();

    if (token != null){
      request = request.clone({
        setHeaders: { Authorization: `${token}`}
      });
    }else{
      request = request.clone();
    }

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    },(error: any) => {
      if (error instanceof HttpErrorResponse) {
        this.openDialog("Error "+error.status,error.error);
      }
    });

  }


  openDialog(title:string,msg:string){
    this.confirmDialogRef = this.dialog.open(ConfirmDialogComponent);
    this.confirmDialogRef.componentInstance.confirmMessage = msg;
    this.confirmDialogRef.componentInstance.confirmTitle = title;
  }

}
