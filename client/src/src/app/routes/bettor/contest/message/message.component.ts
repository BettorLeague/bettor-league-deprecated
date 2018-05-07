import { Component, OnInit } from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations   : fuseAnimations
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
