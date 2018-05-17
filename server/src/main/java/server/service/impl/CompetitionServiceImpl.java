package server.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import server.model.football.Competition;
import server.model.football.Fixture;
import server.model.football.LeagueTable;
import server.model.football.Team;
import server.repository.football.CompetitionRepository;
import server.repository.football.FixtureRepository;
import server.repository.football.LeagueTableRepository;
import server.repository.football.TeamRepository;
import server.service.CompetitionService;

import java.util.*;

import static java.util.Objects.isNull;

@Service
@Slf4j
public class CompetitionServiceImpl implements CompetitionService{

    private final CompetitionRepository competitionRepository;
    private final LeagueTableRepository leagueTableRepository;
    private final FixtureRepository fixtureRepository;
    private final TeamRepository teamRepository;

    public CompetitionServiceImpl(CompetitionRepository competitionRepository,
                                  TeamRepository teamRepository,
                                  FixtureRepository fixtureRepository,
                                  LeagueTableRepository leagueTableRepository){
        this.competitionRepository = competitionRepository;
        this.leagueTableRepository = leagueTableRepository;
        this.fixtureRepository = fixtureRepository;
        this.teamRepository = teamRepository;
    }


    public ResponseEntity<List<Competition>> getAllCompetition() {
        List<Competition> competitions =  this.competitionRepository.findAll();
        if (competitions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else
            return new ResponseEntity<>(competitions,HttpStatus.OK);
    }

    public ResponseEntity<Competition> getCompetitionById(Long id) {
        if (!competitionRepository.exists(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else
            return new ResponseEntity<>(competitionRepository.findOne(id),HttpStatus.OK);
    }

    public ResponseEntity<List<Team>> getAllTeamOfCompetition(Long id) {
        if (competitionRepository.exists(id)) {
            Competition competition = this.competitionRepository.findOne(id);
            return new ResponseEntity<>(competition.getTeams(),HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Team> getTeamByName(String name) {
        if (teamRepository.existsByName(name)) {
            Team team = this.teamRepository.findByName(name);
            return new ResponseEntity<>(team,HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Team> getTeamById(Long teamId) {
        if (teamRepository.exists(teamId)) {
            Team team = this.teamRepository.findOne(teamId);
            return new ResponseEntity<>(team,HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    public ResponseEntity<LeagueTable> getRankingOfCompetition(Long id) {
        if (competitionRepository.exists(id)) {
            Competition competition = this.competitionRepository.findOne(id);
            if(isNull(this.leagueTableRepository.findByLeagueCaptionAndMatchday(competition.getCaption(),competition.getCurrentMatchday()))){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            LeagueTable leagueTable = this.leagueTableRepository.findByLeagueCaptionAndMatchday(competition.getCaption(),competition.getCurrentMatchday());
            return new ResponseEntity<>(leagueTable,HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<LeagueTable> getRankingOfCompetitionOfMatchDay(Long competitionId,int matchDay) {
        if (competitionRepository.exists(competitionId)) {
            Competition competition = this.competitionRepository.findOne(competitionId);
            if(isNull(this.leagueTableRepository.findByLeagueCaptionAndMatchday(competition.getCaption(),matchDay))){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            LeagueTable leagueTable = this.leagueTableRepository.findByLeagueCaptionAndMatchday(competition.getCaption(),matchDay);
            return new ResponseEntity<>(leagueTable,HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    public ResponseEntity<List<Fixture>> getMatchOfCompetition(Long competitionId) {
        if (competitionRepository.exists(competitionId)) {
            return new ResponseEntity<>(this.fixtureRepository.findByCompetitionId(competitionId),HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<List<Fixture>> getMatchOfCompetitionByMatchDay(Long competitionId,int matchDay) {
        if (competitionRepository.exists(competitionId)) {
            return new ResponseEntity<>(this.fixtureRepository.findByCompetitionIdAndAndMatchday(competitionId,matchDay),HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<List<Fixture>> get5LastMatchOfCompetitionByTeamNameAndMatchDay(Long competitionId,Long teamId,int matchDay) {
        Competition competition = competitionRepository.findOne(competitionId);
        Team team = teamRepository.findOne(teamId);
        if (!isNull(competition) && !isNull(team)) {

            List<Fixture> last5Match = new ArrayList<>();
            List<Fixture> allTeammatch = this.fixtureRepository.findByCompetitionIdAndHomeTeamNameOrAwayTeamName(competitionId,team.getName(),team.getName());

            for(int i = (matchDay == -1)? allTeammatch.size() : matchDay -1 ; last5Match.size() < 5 && i > 0 ; i--){
                Fixture fixture = allTeammatch.get(i-1);
                if (fixture.getStatus().equals("FINISHED")) last5Match.add(fixture);
            }

            last5Match.sort(new Comparator<Fixture>() {
                @Override
                public int compare(Fixture o1, Fixture o2) {
                    return Integer.compare(o1.getMatchday(),o2.getMatchday());
                }
            });

            return new ResponseEntity<>(last5Match,HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }








}
