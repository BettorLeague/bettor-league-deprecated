'use strict';

module.exports = (app) =>
{

  app.get("/api/contest/:contestId", (req, res) => {
    res.send({
    "id": 1,
    "caption": "Ligue 1",
    "ownerId": 1,
    "type": "PUBLIC",
    "competitionId": 1,
    "messages": []
  });
});

  app.get("/api/contest", (req, res) => {
    res.send([{
    "id": 1,
    "caption": "Ligue 1",
    "ownerId": 1,
    "type": "PUBLIC",
    "competitionId": 1,
    "messages": []
  }]);
});

  app.get("/api/contest/:contestId/players", (req, res) => {
    res.send([
    {
      "id": 1,
      "userId": 1,
      "username":"admin",
      "contestId": 1,
      "pronostics": [],
      "points": 0,
      "goodPronostic": 0,
      "exactPronostic": 1,
    }
  ]);
});

  app.get("/api/user/:contestId/contest", (req, res) => {
    res.send([
    {
      "id": 1,
      "caption": "Ligue 1",
      "ownerId": 1,
      "type": "PUBLIC",
      "competitionId": 1,
      "messages": []
    }
  ]);
});

}
