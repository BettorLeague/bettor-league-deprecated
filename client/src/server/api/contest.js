'use strict';

module.exports = (app) =>
{

  app.get("/api/bettor/contest/public/:contestId", (req, res) => {
    res.send({
    "id": 1,
    "caption": "Ligue 1",
    "ownerId": 1,
    "type": "PUBLIC",
    "competitionId": 1,
    "messages": []
  });
});

  app.get("/api/bettor/contest/public", (req, res) => {
    res.send([{
    "id": 1,
    "caption": "Ligue 1",
    "ownerId": 1,
    "type": "PUBLIC",
    "competitionId": 1,
    "messages": []
  }]);
});

  app.get("/api/bettor/contest/:contestId/players", (req, res) => {
    res.send([]);
});

}
