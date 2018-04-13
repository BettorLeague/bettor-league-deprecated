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
    private StandingRepository standingRepository;

    @Inject
    private FixtureRepository fixtureRepository;


    private final Log logger = LogFactory.getLog(this.getClass());

    @Scheduled(cron = "0 0 0 * * *", zone = "Europe/Paris")
    public void getLigue1Competition() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,"450");
    }/*

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
        //updateFixture(restTemplate,"450",new Long(1));
    }*/


    private void updateCompetition(RestTemplate restTemplate, String id){

        Competition competition = restTemplate.getForObject("https://www.football-data.org/v1/competitions/"+id, Competition.class);
        Long competitionId;
        if(isNull(competitionRepository.findByCaption(competition.getCaption()))){
            List<Team> teams = updateTeamCompetition(restTemplate,id);
            competition.setTeams(teams);
            competitionRepository.save(competition);
            competitionId = competitionRepository.findByCaption(competition.getCaption()).getId();
        }else{
            Competition current = competitionRepository.findByCaption(competition.getCaption());
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
                leagueTableRepository.save(leagueTable);
            }
        }
    }

    private void updateFixture(RestTemplate restTemplate,String id,Long competitionId) {
        FixtureRequest fixtureRequest = restTemplate.getForObject("https://www.football-data.org/v1/competitions/"+id+"/fixtures", FixtureRequest.class);
        List<Fixture> fixtures = fixtureRequest.getFixtures();
        for(int i = 0 ; i < fixtures.size(); i++){
            Fixture fixture = fixtures.get(i);
            fixture.setCompetitionId(competitionId);
            fixture.setId(new Long(i+1));
            fixtureRepository.save(fixture);
        }
    }



}
