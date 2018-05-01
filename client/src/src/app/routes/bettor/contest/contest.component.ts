import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
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
