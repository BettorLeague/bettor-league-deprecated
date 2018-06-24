'use strict';

module.exports = (app) => {
  app.get("/auth/refresh", (req, res) => {
    res.send({"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUyNDA1NTY0NiwiaWF0IjoxNTIzNDUwODQ2fQ.uET1zS3Tx0di3ltRaPRljhPNGsloEdyKW3mTj3-M6sCAmYHC3o8sVgidF75naZM8qCSX8pgC6ok0WeLlzqR4jg"});
});


  app.post('/auth/login', (req, res) => {
    res.send({"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUyNDA1NTY0NiwiaWF0IjoxNTIzNDUwODQ2fQ.uET1zS3Tx0di3ltRaPRljhPNGsloEdyKW3mTj3-M6sCAmYHC3o8sVgidF75naZM8qCSX8pgC6ok0WeLlzqR4jg"});
});


  app.get("/auth/user", (req, res) => {
    res.send({"id":28,"username":"admin","firstname":"admin","lastname":"admin","email":"admin@test.fr","enabled":true,"authorities":[{"id":1,"name":"ROLE_USER","authority":"ROLE_USER"},{"id":2,"name":"ROLE_ADMIN","authority":"ROLE_ADMIN"}]});
});


};
