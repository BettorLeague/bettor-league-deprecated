export class RankingModel {
    id: number;
    leagueCaption: string;
    matchday: number;
    standing: Array<{
        position: number,
        teamName: string,
        playedGames: number,
        crestURI: string,
        points: number,
        goals: number,
        goalsAgainst: number,
        goalDifference: number
    }>
}