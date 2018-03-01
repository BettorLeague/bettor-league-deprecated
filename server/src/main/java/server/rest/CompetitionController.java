package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.service.CompetitionService;

import javax.inject.Inject;

@RestController
public class CompetitionController {

    @Inject
    private CompetitionService competitionService;

    @RequestMapping(path = "/api/competition/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getAllCompetition() {
        return this.competitionService.getAllCompetition();
    }

    @RequestMapping(path = "/api/competition/{competitionId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getCompetitionById(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getCompetitionById(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/teams", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getAllTeamOfCompetition(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getAllTeamOfCompetition(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/ranking", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getRankingOfCompetition(@PathVariable("competitionId") Long competitionId) {
        return this.competitionService.getRankingOfCompetition(competitionId);
    }

    @RequestMapping(path = "/api/competition/{competitionId}/ranking/{matchday}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getRankingOfCompetitionOfMatchDay(@PathVariable("competitionId") Long competitionId,@PathVariable("matchday") int matchDay) {
        return this.competitionService.getRankingOfCompetitionOfMatchDay(competitionId,matchDay);
    }



}
