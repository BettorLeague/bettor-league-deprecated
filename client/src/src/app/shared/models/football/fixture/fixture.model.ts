import {ResultModel} from "./result.model";

export class FixtureModel{
  id:number;
  competitionId: number;
  date: Date;
  status: string;
  matchday:number;
  homeTeamName: string;
  awayTeamName:string;
  result: ResultModel;
}
