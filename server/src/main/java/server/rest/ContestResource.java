package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.bettor.Contest;
import server.model.bettor.Player;

import java.util.List;

@RestController
public class ContestResource {

    private final ContestResourceDelegate contestResourceDelegate;

    public ContestResource(ContestResourceDelegate contestResourceDelegate){
        this.contestResourceDelegate = contestResourceDelegate;
    }

    @RequestMapping(path = "/api/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getAllContest() {
        return this.contestResourceDelegate.getAllPublicContest();
    }

    @RequestMapping(path = "/api/contest/{contestId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> getContestById(@PathVariable("contestId") Long contestId) {
        return this.contestResourceDelegate.getContestById(contestId);
    }

    @RequestMapping(path = "/api/contest/{contestId}/players", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Player>> getPlayersByContestId(@PathVariable("contestId") Long contestId) {
        return this.contestResourceDelegate.getPlayersByContestId(contestId);
    }

    @RequestMapping(path = "/api/contest/{contestId}/nbPlayers", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Long> getNbPlayerInContest(@PathVariable("contestId") Long contestId) {
        return this.contestResourceDelegate.getNbPlayerInContest(contestId);
    }


    @RequestMapping(path = "/api/contest/{contestId}/players/{playerId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> getPlayerByContestIdAndPlayerId(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId) {
        return this.contestResourceDelegate.getPlayerByContestIdAndPlayerId(contestId,playerId);
    }

    @RequestMapping(path = "/api/user/{userId}/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getContestPlayedByUserId(@PathVariable("userId") Long userId) {
        return this.contestResourceDelegate.getContestPlayedByUserId(userId);
    }

}
