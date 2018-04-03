import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import {CommonModule} from "@angular/common";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    ConfirmDialogComponent,
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    ConfirmDialogComponent
],
})
export class ComponentsModule { }
