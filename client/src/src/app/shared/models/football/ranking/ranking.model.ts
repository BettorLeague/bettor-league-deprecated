import {StandingModel} from "./standing.model";

export class RankingModel {
    id: number;
    leagueCaption: string;
    matchday: number;
    standing: StandingModel[];
}
