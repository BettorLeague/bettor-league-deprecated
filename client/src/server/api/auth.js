'use strict';

module.exports = app => {
  app.get('/api/refresh', (req, res) => {
    res.send({
    "access_token": 'dev-Token',
    "expires_in": '600'
  });
});


  app.post('/api/login', (req, res) => {
    res.send({
    "access_token": 'dev-Token',
    "expires_in": '600'
  });
});

  app.post('/api/logout', (req, res) => {
    res.send();
});
};
