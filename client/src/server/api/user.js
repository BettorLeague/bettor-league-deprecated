'use strict';

module.exports = (app) => {

  app.get('/api/user/whoami', (req, res) => {
    res.send({
    "id": 1,
    "username": "admin",
    "firstname": "Admin",
    "lastname": "Admin",
    "authorities": [
      {
        "authority": "ROLE_USER"
      },
      {
        "authority": "ROLE_ADMIN"
      }
    ]
    });
  });


  app.get('/api/user', (req, res) => {
    res.send({
      "id": 1,
      "username": "admin",
      "firstname": "admin",
      "lastname": "admin",
      "email": "admin@admin.com",
      "enabled": true,
      "authorities": [
        {
          "name": "ROLE_USER",
          "authority": "ROLE_USER"
        },
        {
          "name": "ROLE_ADMIN",
          "authority": "ROLE_ADMIN"
        }
      ],
      "country": null,
      "birthDate": null,
      "sex": null,
      "favoriteTeam": null,
      "quote": null,
      "level": null
    })
  });

  app.get('/api/user/contest', (req, res) => {
    res.send([
      {
        "id": 1,
        "caption": "Ligue 1",
        "ownerId": 1,
        "type": "PUBLIC",
        "competitionId": 1,
        "messages": []
      },
      {
        "id": 2,
        "caption": "Premier League",
        "ownerId": 1,
        "type": "PUBLIC",
        "competitionId": 2,
        "messages": []
      },
      {
        "id": 3,
        "caption": "Bundesliga",
        "ownerId": 1,
        "type": "PUBLIC",
        "competitionId": 3,
        "messages": []
      },
      {
        "id": 4,
        "caption": "La Liga",
        "ownerId": 1,
        "type": "PUBLIC",
        "competitionId": 4,
        "messages": []
      },
      {
        "id": 5,
        "caption": "Serie A",
        "ownerId": 1,
        "type": "PUBLIC",
        "competitionId": 5,
        "messages": []
      }
    ])
  })

  app.get('/api/user/stats', (req, res) => {
    res.send({
      "numberPronostic": 0,
      "goodPronostic": 0,
      "exactPronostic": 0
    })
  })

};


