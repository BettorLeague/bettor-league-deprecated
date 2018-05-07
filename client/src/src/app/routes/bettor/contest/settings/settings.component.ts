import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations   : fuseAnimations
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
