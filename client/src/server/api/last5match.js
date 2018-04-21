'use strict';

module.exports = (app) => {

  app.get("/api/competition/:idCompetition/last_5_match/:idTeam/:matchDay", (req, res) => {
    res.send([
    {
      "id": 281,
      "competitionId": 1,
      "date": 1520624700000,
      "status": "FINISHED",
      "matchday": 29,
      "homeTeamName": "RC Strasbourg Alsace",
      "awayTeamName": "AS Monaco FC",
      "result": {
        "goalsAwayTeam": 3,
        "goalsHomeTeam": 1
      }
    },
    {
      "id": 292,
      "competitionId": 1,
      "date": 1521229500000,
      "status": "FINISHED",
      "matchday": 30,
      "homeTeamName": "AS Monaco FC",
      "awayTeamName": "OSC Lille",
      "result": {
        "goalsAwayTeam": 1,
        "goalsHomeTeam": 2
      }
    },
    {
      "id": 310,
      "competitionId": 1,
      "date": 1522860300000,
      "status": "FINISHED",
      "matchday": 31,
      "homeTeamName": "Stade Rennais FC",
      "awayTeamName": "AS Monaco FC",
      "result": {
        "goalsAwayTeam": 1,
        "goalsHomeTeam": 1
      }
    },
    {
      "id": 312,
      "competitionId": 1,
      "date": 1523113200000,
      "status": "FINISHED",
      "matchday": 32,
      "homeTeamName": "AS Monaco FC",
      "awayTeamName": "FC Nantes",
      "result": {
        "goalsAwayTeam": 1,
        "goalsHomeTeam": 2
      }
    },
    {
      "id": 330,
      "competitionId": 1,
      "date": 1523818800000,
      "status": "FINISHED",
      "matchday": 33,
      "homeTeamName": "Paris Saint-Germain",
      "awayTeamName": "AS Monaco FC",
      "result": {
        "goalsAwayTeam": 1,
        "goalsHomeTeam": 7
      }
    }
  ]);
});

}
