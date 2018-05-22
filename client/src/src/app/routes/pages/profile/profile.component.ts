import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import { ContestService } from '../../../shared/services/bettor/contest.service';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  contestPlayedIdList = [];
  allPublicContest: any;
  userInfo: any;
  userStats: any;
  userContests: any;

  constructor(
    public authService: AuthService,
    private contestService: ContestService,
    private userService: UserService,
    this.getCurrentUser();
    this.getAllPublicContest();
    this.getUserContests();
    this.getUserStats();
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

  getUserStats() {
    this.userService.getUserStats().subscribe(data => {
      this.userStats = data;
    });
  }

  getUserContests() {
    this.userService.getUserContests().subscribe(data => {
      this.userContests = data;
    });
  }

  getCurrentUser() {
    this.userService.getUser().subscribe(data => {
      this.userInfo = data;
    });
  }

  getAllPublicContest() {
    this.contestService.getAllPublicContest().subscribe(data => {
      this.allPublicContest = data;
      console.log(data);
    });
  }

  joinContest(contestId) {
    this.contestService.addUserToContest(this.authService.currentUser.id, contestId);
  }

  quitContext(contestId) {
    this.contestService.deleteUserFromContest(this.authService.currentUser.id, contestId);
  }
}
