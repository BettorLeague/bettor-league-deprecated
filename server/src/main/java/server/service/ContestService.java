package server.service;

import server.model.bettor.Contest;
import server.model.bettor.Player;

import java.util.List;

public interface ContestService {

    List<Contest> getAllPublicContest();
    List<Player>  getPlayersByContestId(Long contestId);

    Player getPlayerByContestIdAndPlayerId(Long contestId,Long playerId);
    Player addUserToContest(Long contestId, Long userId);
    Player deletePlayerFromContest(Long contestId,Long playerId);

    Contest addContest(Contest contest);
    Contest getContestById(Long contestId);
    Contest deleteContest(Long contestId);

    List<Contest> getContestPlayedByUser(Long userId);


    boolean existUserInContest(Long userId,Long contestId);
    boolean existContest(Long contestId);
}
