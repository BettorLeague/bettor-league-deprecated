package server.batch;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import server.model.Competition;
import server.model.LeagueTable;
import server.model.Standing;
import server.model.Team;
import server.model.football.request.TeamRequest;
import server.repository.CompetitionRepository;
import server.repository.LeagueTableRepository;
import server.repository.StandingRepository;
import server.repository.TeamRepository;
import server.security.JwtUser;
import server.service.CompetitionService;

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


    private final Log logger = LogFactory.getLog(this.getClass());

    @Scheduled(cron = "0 0 0 * * *", zone = "Europe/Paris")
    //@Scheduled(fixedRate = 1000 * 60 * 60 * 24)
    public void getLigue1Competition() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new RestTemplateInterceptor());
        updateCompetition(restTemplate,"450");
    }

    private void updateCompetition(RestTemplate restTemplate, String id){

        Competition competition = restTemplate.getForObject("https://www.football-data.org/v1/competitions/"+id, Competition.class);

        if(isNull(competitionRepository.findByCaption(competition.getCaption()))){
            List<Team> teams = updateTeamCompetition(restTemplate,id);
            competition.setTeams(teams);
            competitionRepository.save(competition);
        }else{
            Competition current = competitionRepository.findByCaption(competition.getCaption());
            current.setCurrentMatchday(competition.getCurrentMatchday());
            current.setLastUpdated(competition.getLastUpdated());
            competitionRepository.save(current);
        }

        updateLeagueRank(restTemplate,competition,id);

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


}
