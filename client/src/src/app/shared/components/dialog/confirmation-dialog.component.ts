import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent implements OnInit {
  public title: string;
  public message: string;
  public titleAlign?: string;
  public messageAlign?: string;
  public btnOkText?: string;
  public btnCancelText?: string;
  public btnOkEnabled? :boolean;
  public btnCancelEnabled? :boolean;

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit() {
  }

}
