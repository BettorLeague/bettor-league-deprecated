[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](http://bettorleague.ovh/)
[![Build Status](http://www.jenkins.bettorleague.ovh/buildStatus/icon?job=BettorLeague)](http://jenkins.bettorleague.ovh/job/BettorLeague/)
[![GitHub issues](https://img.shields.io/github/issues/BettorLeague/bettor-league.svg)](https://github.com/BettorLeague/bettor-league/issues)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/33d722ae6fcd4692ac4a3eca1d335f14)](https://www.codacy.com/app/CNadjim/bettor-league?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BettorLeague/bettor-league&amp;utm_campaign=Badge_Grade)
[![License Apache-2.0](https://img.shields.io/badge/license-APACHE_2.0-blue.svg)](https://github.com/BettorLeague/bettor-league/blob/master/LICENSE)

https://bettorleague.github.io/bettor-league/

# Bettor-league

Comment enrichir la communauté du football au travers d’une application divertissante autour des pronostics ?

BettorLeague / Ligue des parieurs

Principales fonctionnalités

- Suivre les résultats des matchs
- Pronostics sur les futurs matchs de la ligue 1
- Création de groupe de pronostic & discussion

Les résultats rapportent plus ou moins de points / trophés pour monter en rang .

### Prerequisites

Ensure you have this installed before proceeding further
- Java 8
- Maven 3.3.9+ 
- Node 6.0 or above,  
- npm 5 or above,   
- Angular-cli 1.6.3

## Technology Stack

Component         | Technology
---               | ---
Frontend          | [Angular 5](https://github.com/angular/angular) (JavaScript)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
REST Documentation| [Swagger UI / Springfox](https://github.com/springfox/springfox)
In Memory DB      | [H2](http://www.h2database.com/html/main.html) / [MySQL](https://www.mysql.com/fr/) 
Persistence       | [JPA](https://fr.wikipedia.org/wiki/Java_Persistence_API) (Using Spring Data)
Client Build Tools| [angular-cli , npm](https://github.com/angular/angular-cli)
Server Build Tools| [Maven](https://maven.apache.org/) (Java)
Continuous integration | [Jenkins](https://jenkins.io)
API Restfull de Resultat Sportif | [FootballData](https://www.football-data.org/)


## How do JSON Web Tokens work?
In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned and must be saved locally (typically in local storage, but cookies can be also used), instead of the traditional approach of creating a session in the server and returning a cookie.

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:

Authorization: <token>

This is a stateless authentication mechanism as the user state is never saved in server memory. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. As JWTs are self-contained, all the necessary information is there, reducing the need to query the database multiple times.

This allows you to fully rely on data APIs that are stateless and even make requests to downstream services. It doesn't matter which domains are serving your APIs, so Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.

The following diagram shows this process:
<div style="display:flex;justify-content:center">
    <img src="http://nsa39.casimages.com/img/2018/04/09/180409022638805435.png" />
</div>

## Football Match Modeling
<div style="display:flex;justify-content:center">
    <img src="http://api.football-data.org/docs/v1/state_diagram_fixturestatus.png" />
</div>

## Local Environment 


### Build Only Frontend (Angular 5)
http://localhost:4200
```
cd  client/src/
npm install
npm start
```

### Build Front & Backend (SpringBoot Java)
http://localhost:8080
```
mvn clean install
cd  server
mvn spring-boot:run
```

### Database (H2 in memory)
http://localhost:8080/database
```
UserName: root
Password: root
```

### Useful Links 

- Swagger : http://localhost:8080/swagger-ui.html
- Database : http://localhost:8080/database/
- Semantic UI : https://edcarroll.github.io/ng2-semantic-ui/

Verifier l'espace disque d'un dossier :
```
du -h --max-depth=1
```

Jenkins script :
```
#!/bin/bash
JENKINS_NODE_COOKIE=dontKillMe
ps aux | grep server | awk '{print $2}' | xargs kill -9 || true
java -jar server/target/server-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod --server.port=8081 &
```
