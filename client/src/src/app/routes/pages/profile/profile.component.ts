import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import { ContestService } from '../../../shared/services/bettor/contest.service';
import { UserService } from '../../../shared/services/user/user.service';
import { CompetitionService } from '../../../shared/services/football/competition.service';

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
  allCompetitions: any;
  selectedCompetition: number;
  newContestName = '';

  constructor(
    public authService: AuthService,
    private contestService: ContestService,
    private userService: UserService,
    private competitionService: CompetitionService
  ) {
    this.getCurrentUser();
    this.getAllPublicContest();
    this.getUserContests();
    this.getUserStats();
    this.getAllCompetitions();
   }

  ngOnInit() {
  }

  getAllCompetitions() {
    this.competitionService.getAllCompetition().subscribe(data => {
      this.allCompetitions = data;
      console.log(data);
    });
  }

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
      console.log(data);
    });
  }

  getAllPublicContest() {
    this.contestService.getAllPublicContest().subscribe(data => {
      this.allPublicContest = data;
      console.log(data);
    });
  }

  createNewPrivateContest() {
    if (this.selectedCompetition !== undefined && this.newContestName !== '') {
      console.log(this.newContestName);
      console.log(this.selectedCompetition);
      this.contestService.createNewPrivateContest(this.selectedCompetition, this.newContestName);
    }
  }

  joinContest(contestId) {
      this.contestService.joinContest(contestId);
      console.log(contestId);
  }

  quitContest(contestId) {
      console.log(contestId);
      console.log(this.userInfo.id);
  }
}
