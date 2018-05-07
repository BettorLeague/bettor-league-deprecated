package server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.bettor.Contest;
import server.model.bettor.ContestType;
import server.model.bettor.Player;
import server.service.BettorService;

import javax.inject.Inject;
import java.util.List;

@RestController
public class BettorResource {

    @Autowired
    private BettorService bettorService;

    @RequestMapping(path = "/api/bettor/contest/public", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getAllPublicContest() {
        return new ResponseEntity<>(this.bettorService.getAllPublicContest(), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/bettor/contest/public", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Contest> addPublicContest(@RequestBody Contest contest) {
        if(contest.getType().equals(ContestType.PRIVATE)){
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(this.bettorService.addContest(contest), HttpStatus.OK);
        }
    }

    @RequestMapping(path = "/api/bettor/contest/public/{contestId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> getPublicContestById(@PathVariable("contestId") Long contestId) {
        return new ResponseEntity<>(this.bettorService.getContestById(contestId), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/bettor/contest/{contestId}/players/", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Player>> getPlayersByContestId(@PathVariable("contestId") Long contestId) {
        return new ResponseEntity<>(this.bettorService.getPlayersByContestId(contestId), HttpStatus.OK);
    }

    @RequestMapping(path = "/api/bettor/contest/private/{ownerId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getAllPrivateContestByOwnerId(@PathVariable("ownerId") Long ownerId) {
        return new ResponseEntity<>(this.bettorService.getAllPrivateContestByOwnerId(ownerId), HttpStatus.OK);
    }


    @RequestMapping(path = "/api/bettor/contest/private", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> addPrivateContest(@RequestBody Contest contest) {
        if(contest.getType().equals(ContestType.PUBLIC)){
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(this.bettorService.addContest(contest), HttpStatus.OK);
        }
    }

    // FIXME
    @RequestMapping(path = "/api/bettor/contest/private/{contestId}/player/{playerId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> deletePlayerFromPrivateContest(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }




}
