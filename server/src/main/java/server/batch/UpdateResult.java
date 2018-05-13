package server.batch;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import server.dto.FixtureRequest;
import server.dto.TeamRequest;
import server.model.football.Competition;
import server.model.football.Fixture;
import server.model.football.LeagueTable;
import server.model.football.Team;
import server.repository.football.*;

import javax.inject.Inject;
import java.util.List;

import static java.util.Objects.isNull;

@Component
public class UpdateResult {

    @Inject
    private CompetitionRepository competitionRepository;

    @Inject
    private TeamRepository teamRepository;

    @Inject
    private LeagueTableRepository leagueTableRepository;


    @Inject
    private FixtureRepository fixtureRepository;


    private final Log logger = LogFactory.getLog(this.getClass());

    public void updateChampionant(String id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,id);
    }
/*
    @Scheduled(cron = "0 0 0 * * *", zone = "Europe/Paris")
    public void updateAllChampionat(){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,"450");
        updateCompetition(restTemplate,"445");
        updateCompetition(restTemplate,"452");
        updateCompetition(restTemplate,"455");
        updateCompetition(restTemplate,"456");
    }

    @Scheduled(cron = "0 0 0 * * *", zone = "Europe/Paris")
    public void getMondialCompetition() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,"467");
    }
        @Scheduled(fixedRate = 1000 * 60 * 60 * 24)
    public void lol(){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,"450");
    }
*/

    @Scheduled(fixedRate = 1000 * 60 * 60 )
    public void updateResult(){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,"450"); // Ligue 1
        updateCompetition(restTemplate,"445"); // Premier League
        updateCompetition(restTemplate,"452"); // Bundesliga
        updateCompetition(restTemplate,"455"); // Liga
        updateCompetition(restTemplate,"456"); // Serie A
    }



    private void updateCompetition(RestTemplate restTemplate, String id){

        Competition competition = restTemplate.getForObject("https://www.football-data.org/v1/competitions/"+id, Competition.class);
        Long competitionId;

        if(isNull(competitionRepository.findByCaption(competition.getCaption()))){

            List<Team> teams = updateTeamCompetition(restTemplate,id);
            competition.setTeams(teams);
            competition.setCrestUrl(this.getCompetitionCrestByFootballDataId(id));
            competitionRepository.save(competition);
            competitionId = competitionRepository.findByCaption(competition.getCaption()).getId();

        }else{

            Competition current = competitionRepository.findByCaption(competition.getCaption());
            if(current.getLastUpdated().before(competition.getLastUpdated())){
                updateLeagueRankAfterChange(restTemplate,id,current);
            }
            current.setCurrentMatchday(competition.getCurrentMatchday());
            current.setLastUpdated(competition.getLastUpdated());
            competitionRepository.save(current);
            competitionId = current.getId();

        }

        updateLeagueRank(restTemplate,competition,id);
        updateFixture(restTemplate,id,competitionId);
    }

    private List<Team> updateTeamCompetition(RestTemplate restTemplate, String id){
        TeamRequest teamRequest = restTemplate.getForObject("http://api.football-data.org/v1/competitions/"+id+"/teams",TeamRequest.class);
        List<Team> teams = teamRequest.getTeams();
        for(Team team: teams){
            if (isNull(teamRepository.findByName(team.getName()))) teamRepository.save(team);
        }
        return teams;
    }

    private void updateLeagueRank(RestTemplate restTemplate,Competition competition,String id){
        Competition current = competitionRepository.findByCaption(competition.getCaption());

        for(int i = 1 ; i <= current.getCurrentMatchday(); i++){
            if(isNull(leagueTableRepository.findByLeagueCaptionAndMatchday(current.getCaption(),i))){
                LeagueTable leagueTable = restTemplate.getForObject("http://api.football-data.org/v1/competitions/"+id+"/leagueTable?matchday="+i,LeagueTable.class);
                leagueTable.getStanding().forEach(standing -> {
                    Team team = teamRepository.findByName(standing.getTeamName());
                    if(!isNull(team)){
                        standing.setTeam(team);
                    }
                });
                leagueTableRepository.save(leagueTable);
            }
        }

    }

    private void updateLeagueRankAfterChange(RestTemplate restTemplate, String id,Competition current){
        LeagueTable leagueTable = restTemplate.getForObject("http://api.football-data.org/v1/competitions/"+id+"/leagueTable",LeagueTable.class);
        leagueTable.getStanding().forEach(standing -> {
            Team team = teamRepository.findByName(standing.getTeamName());
            if(!isNull(team)){
                standing.setTeam(team);
            }
        });
        leagueTable.setId(leagueTableRepository.findByLeagueCaptionAndMatchday(current.getCaption(),current.getCurrentMatchday()).getId());
        leagueTableRepository.save(leagueTable);
    }

    private void updateFixture(RestTemplate restTemplate,String id,Long competitionId) {
        FixtureRequest fixtureRequest = restTemplate.getForObject("https://www.football-data.org/v1/competitions/"+id+"/fixtures", FixtureRequest.class);
        List<Fixture> fixtures = fixtureRequest.getFixtures();
        for(int i = 0 ; i < fixtures.size(); i++){
            Fixture fixture = fixtures.get(i);
            fixture.setCompetitionId(competitionId);
            Fixture exist = fixtureRepository.findByCompetitionIdAndHomeTeamNameAndAndAwayTeamName(competitionId,fixture.getHomeTeamName(),fixture.getAwayTeamName());
            if(isNull(exist)){
                fixture.setId(null);
                fixtureRepository.save(fixture);
            }else{
                exist.setDate(fixture.getDate());
                exist.setStatus(fixture.getStatus());
                exist.setResult(fixture.getResult());
                exist.setMatchday(fixture.getMatchday());
                fixtureRepository.save(exist);
            }

        }
    }


    public String getCompetitionCrestByFootballDataId(String id){
        switch (id){
            case "450": return "https://upload.wikimedia.org/wikipedia/fr/9/9b/Logo_de_la_Ligue_1_%282008%29.svg";
            case "445": return "https://upload.wikimedia.org/wikipedia/fr/f/f2/Premier_League_Logo.svg";
            default: return null;
        }
    }



}
