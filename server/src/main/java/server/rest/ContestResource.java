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
    public ResponseEntity<List<Contest>> getAllPublicContest() {
        return new ResponseEntity<>(this.contestService.getAllPublicContest(), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/contest", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> addContest(@RequestBody Contest contest) {
        return new ResponseEntity<>(this.contestService.addContest(contest), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/contest/{contestId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> deleteContest(@PathVariable("contestId") Long contestId) {
        return new ResponseEntity<>(this.contestService.deleteContest(contestId), HttpStatus.OK);
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


    @RequestMapping(path = "/api/contest/{contestId}/players/{userId}", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> addPlayerByUserId(@PathVariable("contestId") Long contestId,@PathVariable("userId") Long userId) {
        return new ResponseEntity<>(this.contestService.addPlayerToContest(contestId, userId), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/contest/{contestId}/players/{playerId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> getPlayerByContestIdAndPlayerId(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId) {
        return new ResponseEntity<>(this.contestService.getPlayerByContestIdAndPlayerId(contestId,playerId), HttpStatus.OK);
    }


    @RequestMapping(path = "/api/contest/{contestId}/players/{playerId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> deletePlayerFromContest(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId) {
        return new ResponseEntity<>(this.contestService.deletePlayerFromContest(contestId,playerId),HttpStatus.NOT_FOUND);
    }


    @RequestMapping(path = "/api/user/{userId}/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getContestPlayedByUserId(@PathVariable("userId") Long userId) {
        return new ResponseEntity<>(this.contestService.getContestPlayedByUser(userId), HttpStatus.OK);
    }

}
