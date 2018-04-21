import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  selectedIndex: number = 0;
  totalTabs: number = 5;

  constructor() { }

  ngOnInit() {
  }

  swipe(eType){
    if(eType === 'swipeleft' && this.selectedIndex < this.totalTabs){
      this.selectedIndex += 1;
    }
    else if (eType === 'swiperight' && this.selectedIndex > 0){
      this.selectedIndex -= 1;
    }
  }

}
