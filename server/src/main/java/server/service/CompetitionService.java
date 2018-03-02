package server.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import server.model.Competition;
import server.model.LeagueTable;
import server.model.Team;
import server.model.User;
import server.repository.CompetitionRepository;
import server.repository.LeagueTableRepository;
import server.repository.UserRepository;

import java.util.List;

import static java.util.Objects.isNull;

@Component
public class CompetitionService {

    private final CompetitionRepository competitionRepository;
    private final LeagueTableRepository leagueTableRepository;

    public CompetitionService(CompetitionRepository competitionRepository,LeagueTableRepository leagueTableRepository){
        this.competitionRepository = competitionRepository;
        this.leagueTableRepository = leagueTableRepository;
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





}
