'use strict';

module.exports = (app) => {

    app.get("/api/competition", (req, res) => {
        res.send([
        {
            "id": 1,
            "caption": "Ligue 1 2017/18",
            "league": "FL1",
            "year": "2017",
            "currentMatchday": 32,
            "numberOfMatchdays": 38,
            "numberOfGames": 380,
            "numberOfTeams": 20,
            "lastUpdated": 1523221805000,
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/9/9b/Logo_de_la_Ligue_1_%282008%29.svg",
        }
    ]);
});

    app.get("/api/competition/:number/ranking/:matchday", (req, res) => {
        res.send({
      "id": 1,
      "leagueCaption": "Ligue 1 2017/18",
      "matchday": 1,
      "standing": [
        {
          "position": 1,
          "teamName": "Olympique Lyonnais",
          "team": {
            "id": 9,
            "name": "Olympique Lyonnais",
            "code": "OLY",
            "shortName": "Lyon",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/f1/Olympique_Lyon.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 4,
          "goalsAgainst": 0,
          "goalDifference": 4,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 2,
          "teamName": "Olympique de Marseille",
          "team": {
            "id": 19,
            "name": "Olympique de Marseille",
            "code": "MAR",
            "shortName": "Marseille",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/27/Olympique_Marseille_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 3,
          "goalsAgainst": 0,
          "goalDifference": 3,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 2,
          "teamName": "OSC Lille",
          "team": {
            "id": 15,
            "name": "OSC Lille",
            "code": "OSC",
            "shortName": "Lille",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/08/LOSC_Lille_Crest_2012.png",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 3,
          "goalsAgainst": 0,
          "goalDifference": 3,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 4,
          "teamName": "EA Guingamp",
          "team": {
            "id": 14,
            "name": "EA Guingamp",
            "code": "GUI",
            "shortName": "Guingamp",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/ae/EA_Guingamp_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 3,
          "goalsAgainst": 1,
          "goalDifference": 2,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 5,
          "teamName": "Paris Saint-Germain",
          "team": {
            "id": 3,
            "name": "Paris Saint-Germain",
            "code": "PSG",
            "shortName": "PSG",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 2,
          "goalsAgainst": 0,
          "goalDifference": 2,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 6,
          "teamName": "AS Monaco FC",
          "team": {
            "id": 1,
            "name": "AS Monaco FC",
            "code": "MON",
            "shortName": "Monaco",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/3c/AS_Monaco.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 3,
          "goalsAgainst": 2,
          "goalDifference": 1,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 7,
          "teamName": "AS Saint-Étienne",
          "team": {
            "id": 7,
            "name": "AS Saint-Étienne",
            "code": "ETI",
            "shortName": "St. Etienne",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b1/AS_Saint-Etienne_(aktuell).svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 1,
          "goalsAgainst": 0,
          "goalDifference": 1,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 7,
          "teamName": "Montpellier Hérault SC",
          "team": {
            "id": 11,
            "name": "Montpellier Hérault SC",
            "code": "MON",
            "shortName": "Montpellier",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/35/HSC_Montpellier_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 3,
          "goals": 1,
          "goalsAgainst": 0,
          "goalDifference": 1,
          "draws": 0,
          "losses": 0,
          "wins": 1
        },
        {
          "position": 9,
          "teamName": "Angers SCO",
          "team": {
            "id": 17,
            "name": "Angers SCO",
            "code": null,
            "shortName": "Angers",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0f/SCO_Angers.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 1,
          "goals": 2,
          "goalsAgainst": 2,
          "goalDifference": 0,
          "draws": 1,
          "losses": 0,
          "wins": 0
        },
        {
          "position": 9,
          "teamName": "FC Girondins de Bordeaux",
          "team": {
            "id": 18,
            "name": "FC Girondins de Bordeaux",
            "code": "BOR",
            "shortName": "Bordeaux",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/ea/Girondins_Bordeaux_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 1,
          "goals": 2,
          "goalsAgainst": 2,
          "goalDifference": 0,
          "draws": 1,
          "losses": 0,
          "wins": 0
        },
        {
          "position": 11,
          "teamName": "ES Troyes AC",
          "team": {
            "id": 5,
            "name": "ES Troyes AC",
            "code": null,
            "shortName": "Troyes",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/ES_Troyes_AC.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 1,
          "goals": 1,
          "goalsAgainst": 1,
          "goalDifference": 0,
          "draws": 1,
          "losses": 0,
          "wins": 0
        },
        {
          "position": 11,
          "teamName": "Stade Rennais FC",
          "team": {
            "id": 6,
            "name": "Stade Rennais FC",
            "code": "REN",
            "shortName": "Rennes",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b6/Stade_Rennais_Football_Club.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 1,
          "goals": 1,
          "goalsAgainst": 1,
          "goalDifference": 0,
          "draws": 1,
          "losses": 0,
          "wins": 0
        },
        {
          "position": 13,
          "teamName": "Toulouse FC",
          "team": {
            "id": 2,
            "name": "Toulouse FC",
            "code": "TOU",
            "shortName": "Toulouse",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Toulouse_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 2,
          "goalsAgainst": 3,
          "goalDifference": -1,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 14,
          "teamName": "OGC Nice",
          "team": {
            "id": 8,
            "name": "OGC Nice",
            "code": "NIC",
            "shortName": "Nice",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/0/03/OGC_Nice_Logo.png",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 0,
          "goalsAgainst": 1,
          "goalDifference": -1,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 14,
          "teamName": "SM Caen",
          "team": {
            "id": 12,
            "name": "SM Caen",
            "code": "SMC",
            "shortName": "Caen",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/7/79/LogoSmc2013.png",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 0,
          "goalsAgainst": 1,
          "goalDifference": -1,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 16,
          "teamName": "FC Metz",
          "team": {
            "id": 13,
            "name": "FC Metz",
            "code": "FCM",
            "shortName": "Metz",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/ba/FC_Metz_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 1,
          "goalsAgainst": 3,
          "goalDifference": -2,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 17,
          "teamName": "Amiens SC",
          "team": {
            "id": 4,
            "name": "Amiens SC",
            "code": null,
            "shortName": "Amiens",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/de/0/0d/SC_Amiens_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 0,
          "goalsAgainst": 2,
          "goalDifference": -2,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 18,
          "teamName": "Dijon FCO",
          "team": {
            "id": 20,
            "name": "Dijon FCO",
            "code": null,
            "shortName": "Dijon",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e1/FCO_Dijon.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 0,
          "goalsAgainst": 3,
          "goalDifference": -3,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 18,
          "teamName": "FC Nantes",
          "team": {
            "id": 16,
            "name": "FC Nantes",
            "code": "NAN",
            "shortName": "Nantes",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/50/FC_Nantes_(seit_2008).svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 0,
          "goalsAgainst": 3,
          "goalDifference": -3,
          "draws": 0,
          "losses": 1,
          "wins": 0
        },
        {
          "position": 20,
          "teamName": "RC Strasbourg Alsace",
          "team": {
            "id": 10,
            "name": "RC Strasbourg Alsace",
            "code": null,
            "shortName": "Strasbourg",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/de/8/84/Racing_Club_Strasbourg.svg",
            "squadMarketValue": null
          },
          "playedGames": 1,
          "points": 0,
          "goals": 0,
          "goalsAgainst": 4,
          "goalDifference": -4,
          "draws": 0,
          "losses": 1,
          "wins": 0
        }
      ]
    })
    });

    app.get("/api/competition/:number/ranking", (req, res) => {
        res.send({
      "id": 34,
      "leagueCaption": "Ligue 1 2017/18",
      "matchday": 34,
      "standing": [
        {
          "position": 1,
          "teamName": "Paris Saint-Germain",
          "team": {
            "id": 3,
            "name": "Paris Saint-Germain",
            "code": "PSG",
            "shortName": "PSG",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 87,
          "goals": 103,
          "goalsAgainst": 23,
          "goalDifference": 80,
          "draws": 3,
          "losses": 2,
          "wins": 28
        },
        {
          "position": 2,
          "teamName": "AS Monaco FC",
          "team": {
            "id": 1,
            "name": "AS Monaco FC",
            "code": "MON",
            "shortName": "Monaco",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/3c/AS_Monaco.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 70,
          "goals": 78,
          "goalsAgainst": 41,
          "goalDifference": 37,
          "draws": 7,
          "losses": 5,
          "wins": 21
        },
        {
          "position": 3,
          "teamName": "Olympique Lyonnais",
          "team": {
            "id": 9,
            "name": "Olympique Lyonnais",
            "code": "OLY",
            "shortName": "Lyon",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/f1/Olympique_Lyon.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 66,
          "goals": 72,
          "goalsAgainst": 36,
          "goalDifference": 36,
          "draws": 9,
          "losses": 5,
          "wins": 19
        },
        {
          "position": 4,
          "teamName": "Olympique de Marseille",
          "team": {
            "id": 19,
            "name": "Olympique de Marseille",
            "code": "MAR",
            "shortName": "Marseille",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/27/Olympique_Marseille_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 66,
          "goals": 67,
          "goalsAgainst": 40,
          "goalDifference": 27,
          "draws": 9,
          "losses": 5,
          "wins": 19
        },
        {
          "position": 5,
          "teamName": "Stade Rennais FC",
          "team": {
            "id": 6,
            "name": "Stade Rennais FC",
            "code": "REN",
            "shortName": "Rennes",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b6/Stade_Rennais_Football_Club.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 47,
          "goals": 42,
          "goalsAgainst": 40,
          "goalDifference": 2,
          "draws": 8,
          "losses": 12,
          "wins": 13
        },
        {
          "position": 6,
          "teamName": "OGC Nice",
          "team": {
            "id": 8,
            "name": "OGC Nice",
            "code": "NIC",
            "shortName": "Nice",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/0/03/OGC_Nice_Logo.png",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 47,
          "goals": 44,
          "goalsAgainst": 45,
          "goalDifference": -1,
          "draws": 8,
          "losses": 12,
          "wins": 13
        },
        {
          "position": 7,
          "teamName": "Montpellier Hérault SC",
          "team": {
            "id": 11,
            "name": "Montpellier Hérault SC",
            "code": "MON",
            "shortName": "Montpellier",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/35/HSC_Montpellier_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 46,
          "goals": 32,
          "goalsAgainst": 29,
          "goalDifference": 3,
          "draws": 16,
          "losses": 7,
          "wins": 10
        },
        {
          "position": 8,
          "teamName": "AS Saint-Étienne",
          "team": {
            "id": 7,
            "name": "AS Saint-Étienne",
            "code": "ETI",
            "shortName": "St. Etienne",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b1/AS_Saint-Etienne_(aktuell).svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 46,
          "goals": 38,
          "goalsAgainst": 45,
          "goalDifference": -7,
          "draws": 10,
          "losses": 11,
          "wins": 12
        },
        {
          "position": 9,
          "teamName": "FC Nantes",
          "team": {
            "id": 16,
            "name": "FC Nantes",
            "code": "NAN",
            "shortName": "Nantes",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/50/FC_Nantes_(seit_2008).svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 45,
          "goals": 32,
          "goalsAgainst": 36,
          "goalDifference": -4,
          "draws": 9,
          "losses": 12,
          "wins": 12
        },
        {
          "position": 10,
          "teamName": "FC Girondins de Bordeaux",
          "team": {
            "id": 18,
            "name": "FC Girondins de Bordeaux",
            "code": "BOR",
            "shortName": "Bordeaux",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/ea/Girondins_Bordeaux_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 43,
          "goals": 39,
          "goalsAgainst": 43,
          "goalDifference": -4,
          "draws": 7,
          "losses": 14,
          "wins": 12
        },
        {
          "position": 11,
          "teamName": "EA Guingamp",
          "team": {
            "id": 14,
            "name": "EA Guingamp",
            "code": "GUI",
            "shortName": "Guingamp",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/ae/EA_Guingamp_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 42,
          "goals": 38,
          "goalsAgainst": 48,
          "goalDifference": -10,
          "draws": 9,
          "losses": 13,
          "wins": 11
        },
        {
          "position": 12,
          "teamName": "Dijon FCO",
          "team": {
            "id": 20,
            "name": "Dijon FCO",
            "code": null,
            "shortName": "Dijon",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e1/FCO_Dijon.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 42,
          "goals": 46,
          "goalsAgainst": 61,
          "goalDifference": -15,
          "draws": 9,
          "losses": 13,
          "wins": 11
        },
        {
          "position": 13,
          "teamName": "Angers SCO",
          "team": {
            "id": 17,
            "name": "Angers SCO",
            "code": null,
            "shortName": "Angers",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0f/SCO_Angers.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 37,
          "goals": 38,
          "goalsAgainst": 44,
          "goalDifference": -6,
          "draws": 13,
          "losses": 12,
          "wins": 8
        },
        {
          "position": 14,
          "teamName": "Amiens SC",
          "team": {
            "id": 4,
            "name": "Amiens SC",
            "code": null,
            "shortName": "Amiens",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/de/0/0d/SC_Amiens_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 37,
          "goals": 29,
          "goalsAgainst": 37,
          "goalDifference": -8,
          "draws": 7,
          "losses": 16,
          "wins": 10
        },
        {
          "position": 15,
          "teamName": "SM Caen",
          "team": {
            "id": 12,
            "name": "SM Caen",
            "code": "SMC",
            "shortName": "Caen",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/fr/7/79/LogoSmc2013.png",
            "squadMarketValue": null
          },
          "playedGames": 32,
          "points": 35,
          "goals": 23,
          "goalsAgainst": 42,
          "goalDifference": -19,
          "draws": 5,
          "losses": 17,
          "wins": 10
        },
        {
          "position": 16,
          "teamName": "RC Strasbourg Alsace",
          "team": {
            "id": 10,
            "name": "RC Strasbourg Alsace",
            "code": null,
            "shortName": "Strasbourg",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/de/8/84/Racing_Club_Strasbourg.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 34,
          "goals": 38,
          "goalsAgainst": 58,
          "goalDifference": -20,
          "draws": 10,
          "losses": 15,
          "wins": 8
        },
        {
          "position": 17,
          "teamName": "Toulouse FC",
          "team": {
            "id": 2,
            "name": "Toulouse FC",
            "code": "TOU",
            "shortName": "Toulouse",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Toulouse_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 32,
          "points": 30,
          "goals": 29,
          "goalsAgainst": 44,
          "goalDifference": -15,
          "draws": 9,
          "losses": 16,
          "wins": 7
        },
        {
          "position": 18,
          "teamName": "OSC Lille",
          "team": {
            "id": 15,
            "name": "OSC Lille",
            "code": "OSC",
            "shortName": "Lille",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/08/LOSC_Lille_Crest_2012.png",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 29,
          "goals": 32,
          "goalsAgainst": 53,
          "goalDifference": -21,
          "draws": 8,
          "losses": 18,
          "wins": 7
        },
        {
          "position": 19,
          "teamName": "ES Troyes AC",
          "team": {
            "id": 5,
            "name": "ES Troyes AC",
            "code": null,
            "shortName": "Troyes",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/ES_Troyes_AC.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 29,
          "goals": 27,
          "goalsAgainst": 49,
          "goalDifference": -22,
          "draws": 5,
          "losses": 20,
          "wins": 8
        },
        {
          "position": 20,
          "teamName": "FC Metz",
          "team": {
            "id": 13,
            "name": "FC Metz",
            "code": "FCM",
            "shortName": "Metz",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/ba/FC_Metz_Logo.svg",
            "squadMarketValue": null
          },
          "playedGames": 33,
          "points": 25,
          "goals": 31,
          "goalsAgainst": 64,
          "goalDifference": -33,
          "draws": 7,
          "losses": 20,
          "wins": 6
        }
      ]
    });
});


}
