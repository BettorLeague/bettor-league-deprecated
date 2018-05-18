package server.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import server.model.bettor.Contest;
import server.model.bettor.Player;
import server.service.ContestService;

import java.util.List;

@Component
public class ContestResourceDelegate {

    private final ContestService contestService;

    public ContestResourceDelegate(ContestService contestService){
        this.contestService = contestService;
    }

    public ResponseEntity<List<Contest>> getAllPublicContest() {
        return new ResponseEntity<>(this.contestService.getAllPublicContest(), HttpStatus.OK);
    }

    public ResponseEntity<Contest> getContestById(Long contestId) {
        return new ResponseEntity<>(this.contestService.getContestById(contestId), HttpStatus.OK);
    }

    public ResponseEntity<List<Player>> getPlayersByContestId( Long contestId) {
        return new ResponseEntity<>(this.contestService.getPlayersByContestId(contestId), HttpStatus.OK);
    }

    public ResponseEntity<Player> getPlayerByContestIdAndPlayerId(Long contestId,Long playerId) {
        return new ResponseEntity<>(this.contestService.getPlayerByContestIdAndPlayerId(contestId,playerId), HttpStatus.OK);
    }

    public ResponseEntity<List<Contest>> getContestPlayedByUserId(Long userId) {
        return new ResponseEntity<>(this.contestService.getContestPlayedByUser(userId), HttpStatus.OK);
    }

    public ResponseEntity<Long> getNbPlayerInContest(Long contestId) {
        if(this.contestService.existContest(contestId)){
            List<Player> players = this.contestService.getPlayersByContestId(contestId);
            return new ResponseEntity<>(new Long(players.size()),HttpStatus.OK);
        }else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
