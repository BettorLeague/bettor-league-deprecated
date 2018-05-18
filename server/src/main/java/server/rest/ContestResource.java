package server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.bettor.Contest;
import server.model.bettor.Player;
import server.service.ContestService;

import java.util.List;

@RestController
public class ContestResource {

    @Autowired
    private ContestService contestService;

    @RequestMapping(path = "/api/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getAllContest() {
        return new ResponseEntity<>(this.contestService.getAllPublicContest(), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/contest/{contestId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> getContestById(@PathVariable("contestId") Long contestId) {
        return new ResponseEntity<>(this.contestService.getContestById(contestId), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/contest/{contestId}/players", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Player>> getPlayersByContestId(@PathVariable("contestId") Long contestId) {
        return new ResponseEntity<>(this.contestService.getPlayersByContestId(contestId), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/contest/{contestId}/players/{playerId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> getPlayerByContestIdAndPlayerId(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId) {
        return new ResponseEntity<>(this.contestService.getPlayerByContestIdAndPlayerId(contestId,playerId), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/user/{userId}/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getContestPlayedByUserId(@PathVariable("userId") Long userId) {
        return new ResponseEntity<>(this.contestService.getContestPlayedByUser(userId), HttpStatus.OK);
    }

}
