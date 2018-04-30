package server.service;

import server.model.bettor.Contest;
import server.model.bettor.Player;

import java.util.List;

public interface BettorService {
    List<Contest> getAllPublicContest();
    List<Contest> getAllPrivateContestByOwnerId(Long ownerId);
    List<Player>  getPlayersByContestId(Long contestId);
    Contest addContest(Contest contest);
}
