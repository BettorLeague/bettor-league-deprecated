import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from "../../../../@fuse/animations";

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss'],
  animations   : fuseAnimations
})
export class ContestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
