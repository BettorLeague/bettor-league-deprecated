import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import {ConfirmationDialogsService} from "./dialog/confirmation-dialog.service";
import {ConfirmationDialogComponent} from "./dialog/confirmation-dialog.component";
import {CommonModule} from "@angular/common";

@NgModule({
  providers: [
    ConfirmationDialogsService,
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    ConfirmationDialogComponent,
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
  ConfirmationDialogComponent
],
})
export class ComponentsModule { }
