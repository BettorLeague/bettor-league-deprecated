'use strict';

module.exports = (app) => {

  app.get("/api/competition/all", (req, res) => {
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
      "lastUpdated": 1523221805000
    }
  ]);
});

  app.get("/api/competition/:number/ranking", (req, res) => {
    res.send({
    "id": 32,
    "leagueCaption": "Ligue 1 2017/18",
    "matchday": 32,
    "standing": [
      {
        "position": 1,
        "teamName": "Paris Saint-Germain",
        "playedGames": 32,
        "crestURI": "https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg",
        "points": 84,
        "goals": 96,
        "goalsAgainst": 22,
        "goalDifference": 74
      },
      {
        "position": 2,
        "teamName": "AS Monaco FC",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/3/3c/AS_Monaco.svg",
        "points": 70,
        "goals": 77,
        "goalsAgainst": 34,
        "goalDifference": 43
      },
      {
        "position": 3,
        "teamName": "Olympique de Marseille",
        "playedGames": 31,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/2/27/Olympique_Marseille_Logo.svg",
        "points": 62,
        "goals": 64,
        "goalsAgainst": 38,
        "goalDifference": 26
      },
      {
        "position": 4,
        "teamName": "Olympique Lyonnais",
        "playedGames": 31,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/f/f1/Olympique_Lyon.svg",
        "points": 60,
        "goals": 64,
        "goalsAgainst": 36,
        "goalDifference": 28
      },
      {
        "position": 5,
        "teamName": "Stade Rennais FC",
        "playedGames": 31,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/b/b6/Stade_Rennais_Football_Club.svg",
        "points": 46,
        "goals": 40,
        "goalsAgainst": 37,
        "goalDifference": 3
      },
      {
        "position": 6,
        "teamName": "Montpellier Hérault SC",
        "playedGames": 31,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/3/35/HSC_Montpellier_Logo.svg",
        "points": 45,
        "goals": 31,
        "goalsAgainst": 26,
        "goalDifference": 5
      },
      {
        "position": 7,
        "teamName": "OGC Nice",
        "playedGames": 31,
        "crestURI": "https://upload.wikimedia.org/wikipedia/fr/0/03/OGC_Nice_Logo.png",
        "points": 45,
        "goals": 42,
        "goalsAgainst": 43,
        "goalDifference": -1
      },
      {
        "position": 8,
        "teamName": "FC Nantes",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/5/50/FC_Nantes_(seit_2008).svg",
        "points": 44,
        "goals": 31,
        "goalsAgainst": 35,
        "goalDifference": -4
      },
      {
        "position": 9,
        "teamName": "AS Saint-Étienne",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/b/b1/AS_Saint-Etienne_(aktuell).svg",
        "points": 43,
        "goals": 37,
        "goalsAgainst": 45,
        "goalDifference": -8
      },
      {
        "position": 10,
        "teamName": "EA Guingamp",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/a/ae/EA_Guingamp_Logo.svg",
        "points": 41,
        "goals": 36,
        "goalsAgainst": 46,
        "goalDifference": -10
      },
      {
        "position": 11,
        "teamName": "Dijon FCO",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/e/e1/FCO_Dijon.svg",
        "points": 41,
        "goals": 45,
        "goalsAgainst": 60,
        "goalDifference": -15
      },
      {
        "position": 12,
        "teamName": "FC Girondins de Bordeaux",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/e/ea/Girondins_Bordeaux_Logo.svg",
        "points": 40,
        "goals": 36,
        "goalsAgainst": 42,
        "goalDifference": -6
      },
      {
        "position": 13,
        "teamName": "Amiens SC",
        "playedGames": 32,
        "crestURI": "https://upload.wikimedia.org/wikipedia/de/0/0d/SC_Amiens_Logo.svg",
        "points": 37,
        "goals": 29,
        "goalsAgainst": 34,
        "goalDifference": -5
      },
      {
        "position": 14,
        "teamName": "Angers SCO",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/0/0f/SCO_Angers.svg",
        "points": 36,
        "goals": 37,
        "goalsAgainst": 43,
        "goalDifference": -6
      },
      {
        "position": 15,
        "teamName": "SM Caen",
        "playedGames": 32,
        "crestURI": "https://upload.wikimedia.org/wikipedia/fr/7/79/LogoSmc2013.png",
        "points": 35,
        "goals": 23,
        "goalsAgainst": 42,
        "goalDifference": -19
      },
      {
        "position": 16,
        "teamName": "RC Strasbourg Alsace",
        "playedGames": 32,
        "crestURI": "https://upload.wikimedia.org/wikipedia/de/8/84/Racing_Club_Strasbourg.svg",
        "points": 34,
        "goals": 38,
        "goalsAgainst": 57,
        "goalDifference": -19
      },
      {
        "position": 17,
        "teamName": "Toulouse FC",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Toulouse_Logo.svg",
        "points": 30,
        "goals": 29,
        "goalsAgainst": 44,
        "goalDifference": -15
      },
      {
        "position": 18,
        "teamName": "ES Troyes AC",
        "playedGames": 32,
        "crestURI": "https://upload.wikimedia.org/wikipedia/commons/b/bf/ES_Troyes_AC.svg",
        "points": 29,
        "goals": 25,
        "goalsAgainst": 46,
        "goalDifference": -21
      },
      {
        "position": 19,
        "teamName": "OSC Lille",
        "playedGames": 32,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/0/08/LOSC_Lille_Crest_2012.png",
        "points": 28,
        "goals": 30,
        "goalsAgainst": 51,
        "goalDifference": -21
      },
      {
        "position": 20,
        "teamName": "FC Metz",
        "playedGames": 31,
        "crestURI": "http://upload.wikimedia.org/wikipedia/de/b/ba/FC_Metz_Logo.svg",
        "points": 22,
        "goals": 29,
        "goalsAgainst": 58,
        "goalDifference": -29
      }
    ]
  });
});


}
