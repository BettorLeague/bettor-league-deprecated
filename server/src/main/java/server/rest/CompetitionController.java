package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.football.Competition;
import server.model.football.Fixture;
import server.model.football.LeagueTable;
import server.model.football.Team;
import server.service.impl.CompetitionService;

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

    @RequestMapping(path = "/api/team/{teamName}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Team> getTeamByName(@PathVariable("teamName") String teamName) {
        return this.competitionService.getTeamByName(teamName);
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

    @RequestMapping(path = "/api/competition/{competitionId}/last_5_match/{teamName}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Fixture>> get5LastMatchOfCompetitionByTeamName(@PathVariable("competitionId") Long competitionId,@PathVariable("teamName") String teamName) {
        return this.competitionService.get5LastMatchOfCompetitionByTeamName(competitionId,teamName);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/last_5_match/{teamName}/{matchday}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Fixture>> get5LastMatchOfCompetitionByTeamNameAndMatchDay(@PathVariable("competitionId") Long competitionId,@PathVariable("teamName") String teamName, @PathVariable("matchday") int matchDay) {
        return this.competitionService.get5LastMatchOfCompetitionByTeamNameAndMatchDay(competitionId,teamName,matchDay);
    }



}
