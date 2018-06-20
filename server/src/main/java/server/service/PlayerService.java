package server.service;

import server.model.bettor.Player;

import java.util.List;

public interface PlayerService {
    List<Player> getAllPlayerByUserId(Long userId);
    Player getPlayerById(Long playerId);
    Player getPlayerByUserIdAndContestId(Long userId,Long contestId );
}
