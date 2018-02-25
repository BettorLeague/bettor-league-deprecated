import {Observable} from 'rxjs/Rx';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {Injectable, ViewContainerRef} from '@angular/core';
import {ConfirmationDialogComponent} from "./confirmation-dialog.component";

@Injectable()
export class ConfirmationDialogsService {

  constructor(private dialog: MatDialog) {}

  public confirm(title: string, message: string, viewContainerRef: ViewContainerRef, btnOkText: string = 'Ok', btnCancelText: string = 'Cancel'): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmationDialogComponent>;
    let config = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.btnOkText = btnOkText;
    dialogRef.componentInstance.btnCancelText = btnCancelText;

    return dialogRef.afterClosed();
  }

  public confirmWithoutContainer(title: string, message: string, titleAlign: string = 'center', messageAlign: string = 'center', enableOk: boolean = true, enableCancel: boolean = true , btnOkText: string = 'Ok', btnCancelText: string = 'Cancel'): Observable<boolean> {

    let dialogRef: MatDialogRef<ConfirmationDialogComponent>;
    let config = new MatDialogConfig();

    dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.titleAlign = titleAlign;
    dialogRef.componentInstance.messageAlign = messageAlign;
    dialogRef.componentInstance.btnOkText = btnOkText;
    dialogRef.componentInstance.btnCancelText = btnCancelText;
    dialogRef.componentInstance.btnOkEnabled = enableOk;
    dialogRef.componentInstance.btnCancelEnabled = enableCancel;

    return dialogRef.afterClosed();
  }


}
