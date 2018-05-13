import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import { ContestService } from '../../../shared/services/bettor/contest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  contestPlayedList: any;
  allPublicContest: any;

  constructor(public authService: AuthService, private contestService: ContestService) {
    this.getContestPlayed();
    this.getAllPublicContest();
   }

  ngOnInit() {
  }

  getContestPlayed() {
    this.contestService.getContestPlayed(this.authService.currentUser.id).subscribe(data => {
      this.contestPlayedList = data;
      console.log(data);
    });
  }

  getAllPublicContest() {
    this.contestService.getAllPublicContest().subscribe(data => {
      this.allPublicContest = data;
      console.log(data);
    });
  }
}
