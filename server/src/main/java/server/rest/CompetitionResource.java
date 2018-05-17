package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.batch.UpdateResult;
import server.model.football.Competition;
import server.model.football.Fixture;
import server.model.football.LeagueTable;
import server.model.football.Team;
import server.service.impl.CompetitionServiceImpl;

import javax.inject.Inject;
import java.util.List;

@RestController
public class CompetitionResource {

    @Inject
    private CompetitionServiceImpl competitionService;

    @Inject
    private UpdateResult updateResult;

    @RequestMapping(path = "/api/competition/update", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void updateAllCompetition() {
        this.updateResult.updateAllChampionat();
    }

    @RequestMapping(path = "/api/competition/update/{footballDataCompeitionId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void updateCompetitionByFootballDataId(@PathVariable("footballDataCompeitionId") String footballDataCompeitionId) {
        this.updateResult.updateChampionant(footballDataCompeitionId);
    }


    @RequestMapping(path = "/api/competition", method = RequestMethod.GET)
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

    @RequestMapping(path = "/api/competition/team/{teamId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Team> getTeamByName(@PathVariable("teamId") Long teamId) {
        return this.competitionService.getTeamById(teamId);
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

    @RequestMapping(path = "/api/competition/{competitionId}/last_5_match/{teamId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Fixture>> get5LastMatchOfCompetitionByTeamName(@PathVariable("competitionId") Long competitionId,@PathVariable("teamId") Long teamId) {
        return this.competitionService.get5LastMatchOfCompetitionByTeamNameAndMatchDay(competitionId,teamId,-1);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/last_5_match/{teamId}/{matchday}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Fixture>> get5LastMatchOfCompetitionByTeamNameAndMatchDay(@PathVariable("competitionId") Long competitionId,@PathVariable("teamId") Long teamId, @PathVariable("matchday") int matchDay) {
        return this.competitionService.get5LastMatchOfCompetitionByTeamNameAndMatchDay(competitionId,teamId,matchDay);
    }





}
