import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginRequestModel} from "../../../shared/models/auth/login.request.model";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usernameBufferForm : string;
    passwordBufferForm : string;
    loginRequest: LoginRequestModel;

    returnUrl: string;
    error: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService : AuthService
    ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit()
    {
        this.loginRequest = new LoginRequestModel();
        this.loginRequest.password = this.passwordBufferForm;
        this.loginRequest.username = this.usernameBufferForm;

        this.authService.login(this.loginRequest)
            .subscribe(data => {
                    this.authService.setToken(data.token);
                    //localStorage.setItem('TOKEN_KEY', data.token);
                    this.authService.initUser().then( res =>{
                            if (this.returnUrl){
                                this.router.navigateByUrl(this.returnUrl);
                            }else
                                this.router.navigate(['/profile']);
                        }
                    );
                },
                error => {
                    this.error = true;
                    setTimeout(
                        () => {
                            this.resetErrorMsg();
                        }, 3000
                    );
                });

    }

    resetErrorMsg() {
        this.error = false;
    }
}
