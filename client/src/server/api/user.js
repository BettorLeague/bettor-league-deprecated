'use strict';

module.exports = app => {
  app.get('/api/user/all', (req, res) => {
    res.send([
    {
      "id": 1,
      "username": "user",
      "firstname": "Chabane",
      "lastname": "Nadjim",
      "authorities": [
        {
          "authority": "ROLE_USER"
        }
      ]
    },
    {
      "id": 2,
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
    }
  ]);
  });


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


};
