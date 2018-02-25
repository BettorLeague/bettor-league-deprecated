import { Component, OnInit } from '@angular/core';
import {ConfirmationDialogsService} from "../../shared/components/dialog/confirmation-dialog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialogsService: ConfirmationDialogsService) {
  }


  ngOnInit() {
  }

}
