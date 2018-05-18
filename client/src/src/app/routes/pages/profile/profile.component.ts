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
  contestPlayedIdList = [];
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
      this.contestPlayedList.forEach(element => {
        this.contestPlayedIdList.push(element.id);
      });
      console.log(data);
      console.log(this.contestPlayedIdList);
    });
  }

  getAllPublicContest() {
    this.contestService.getAllPublicContest().subscribe(data => {
      this.allPublicContest = data;
    });
  }

  joinContest(contestId) {
    this.contestService.addUserToContest(this.authService.currentUser.id, contestId);
  }

  quitContext(contestId) {
    this.contestService.deleteUserFromContest(this.authService.currentUser.id, contestId);
  }
}
