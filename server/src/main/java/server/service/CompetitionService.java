package server.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import server.model.*;
import server.repository.CompetitionRepository;
import server.repository.FixtureRepository;
import server.repository.LeagueTableRepository;
import server.repository.UserRepository;

import java.util.List;

import static java.util.Objects.isNull;

@Component
public class CompetitionService {

    private final CompetitionRepository competitionRepository;
    private final LeagueTableRepository leagueTableRepository;
    private final FixtureRepository fixtureRepository;

    public CompetitionService(CompetitionRepository competitionRepository,
                              FixtureRepository fixtureRepository,
                              LeagueTableRepository leagueTableRepository){
        this.competitionRepository = competitionRepository;
        this.leagueTableRepository = leagueTableRepository;
        this.fixtureRepository = fixtureRepository;
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





}
