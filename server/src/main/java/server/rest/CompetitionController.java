package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.Competition;
import server.model.Fixture;
import server.model.LeagueTable;
import server.model.Team;
import server.service.CompetitionService;

import javax.inject.Inject;
import java.util.List;

@RestController
public class CompetitionController {

    @Inject
    private CompetitionService competitionService;

    @RequestMapping(path = "/api/competition/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Competition>> getAllCompetition() {
        return this.competitionService.getAllCompetition();
    }

    @RequestMapping(path = "/api/competition/{competitionId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Competition> getCompetitionById(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getCompetitionById(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/teams", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Team>> getAllTeamOfCompetition(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getAllTeamOfCompetition(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/ranking", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<LeagueTable> getRankingOfCompetition(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getRankingOfCompetition(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/ranking/{matchday}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<LeagueTable> getRankingOfCompetitionOfMatchDay(@PathVariable("competitionId") Long competitionId,@PathVariable("matchday") int matchDay) {
        return this.competitionService.getRankingOfCompetitionOfMatchDay(competitionId,matchDay);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/match", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Fixture>> getMatchOfCompetition(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getMatchOfCompetition(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/match/{matchday}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Fixture>> getMatchOfCompetitionByMatchDay(@PathVariable("competitionId") Long competitionId,@PathVariable("matchday") int matchDay) {
        return this.competitionService.getMatchOfCompetitionByMatchDay(competitionId,matchDay);
    }



}
