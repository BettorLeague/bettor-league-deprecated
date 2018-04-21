import {FixtureModel} from "../fixture/fixture.model";
import {TeamModel} from "./team.model";

export class StandingModel{
  position: number;
  teamName: string;
  playedGames: number;
  points: number;
  goals: number;
  wins: number;
  losses:number;
  draws:number;
  goalsAgainst: number;
  goalDifference: number;
  team:TeamModel;
  last5match:FixtureModel[];
}
