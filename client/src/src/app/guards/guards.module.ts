import { NgModule } from '@angular/core';
import {AdminGuard} from "./admin/admin.guard";
import {GuestGuard} from "./guest/guest.guard";
import {UserGuard} from "./user/user.guard";

@NgModule({
  providers: [
    AdminGuard,
    GuestGuard,
    UserGuard
  ]
})
export class GuardsModule { }
