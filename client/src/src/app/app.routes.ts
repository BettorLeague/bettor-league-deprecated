import { Routes } from '@angular/router';
import {HomeComponent} from './routes/pages/home/home.component';
import {UserComponent} from './routes/pages/user/user.component';
import {LoginComponent} from "./routes/authentification/login/login.component";
import {AdminGuard} from "./guards/admin/admin.guard";
import {GuestGuard} from "./guards/guest/guest.guard";
import {UserGuard} from "./guards/user/user.guard";
import {ProfileComponent} from "./routes/pages/profile/profile.component";
import {UnauthorizeComponent} from "./routes/error/403/unauthorize.component";
import {RegisterComponent} from "./routes/authentification/register/register.component";
import {MailConfirmComponent} from "./routes/authentification/mail-confirm/mail-confirm.component";
import {ConfidentialiteComponent} from "./routes/pages/confidentialite/confidentialite.component";
import {ForgotPasswordComponent} from "./routes/authentification/forgot-password/forgot-password.component";
import {FileNotFoundComponent} from "./routes/error/404/file-not-found.component";
import {AboutComponent} from "./routes/pages/about/about.component";
import {ContactComponent} from "./routes/pages/contact/contact.component";
import {ContestsComponent} from "./routes/bettor/contests/contests.component";
import {ContestComponent} from "./routes/bettor/contest/contest.component";

export const ROUTES: Routes = [
  { path: '',                     component: HomeComponent },
  { path: '404',                  component: FileNotFoundComponent},
  { path: '403',                  component: UnauthorizeComponent },
  { path: 'home',                 component: HomeComponent },
  { path: 'user',                 component: UserComponent, canActivate: [AdminGuard] },
  { path: 'login',                component: LoginComponent , canActivate: [GuestGuard]},
  { path: 'register',             component: RegisterComponent , canActivate: [GuestGuard]},
  { path: 'mail-confirm',         component: MailConfirmComponent , canActivate: [GuestGuard]},
  { path: 'forgot-password',      component: ForgotPasswordComponent , canActivate: [GuestGuard]},
  { path: 'profile',              component: ProfileComponent, canActivate: [UserGuard] },
  { path: 'confidentialite',      component: ConfidentialiteComponent },
  { path: 'about',                component: AboutComponent },
  { path: 'contact',              component: ContactComponent },
  { path: 'contest/:contestId',   component: ContestComponent , canActivate: [UserGuard]},
  { path: 'contest',              component: ContestsComponent, canActivate: [UserGuard] },
  { path: '**',                   redirectTo: '/404' }
];
