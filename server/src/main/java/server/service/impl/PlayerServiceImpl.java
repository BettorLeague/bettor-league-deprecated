package server.service.impl;

import org.springframework.stereotype.Service;
import server.model.bettor.Player;
import server.repository.bettor.PlayerRepository;
import server.service.PlayerService;

import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService{
     private final PlayerRepository playerRepository;

     public PlayerServiceImpl(PlayerRepository playerRepository){
         this.playerRepository = playerRepository;
     }


    public List<Player> getAllPlayerByUserId(Long userId){
         return this.playerRepository.findAllByUserId(userId);
    }
}
