package server.service;

import server.model.bettor.Player;

import java.util.List;

public interface PlayerService {
    List<Player> getAllPlayerByUserId(Long userId);
}
