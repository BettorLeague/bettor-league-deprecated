package server.service.impl;

import org.springframework.stereotype.Service;
import server.model.bettor.Message;
import server.model.user.User;
import server.model.bettor.Contest;
import server.model.bettor.ContestType;
import server.model.bettor.Player;
import server.repository.user.UserRepository;
import server.repository.bettor.ContestRepository;
import server.repository.bettor.PlayerRepository;
import server.service.ContestService;

import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.nonNull;

@Service
public class ContestServiceImpl implements ContestService {

    private final ContestRepository contestRepository;
    private final UserRepository userRepository;
    private final PlayerRepository playerRepository;

    public ContestServiceImpl(ContestRepository contestRepository, UserRepository userRepository, PlayerRepository playerRepository){
        this.contestRepository = contestRepository;
        this.userRepository = userRepository;
        this.playerRepository = playerRepository;
    }

    public List<Contest> getAllPublicContest(){
        return this.contestRepository.findAllByType(ContestType.PUBLIC);
    }

    public Contest addContest(Contest contest){
        Contest result = this.contestRepository.save(contest);
        if(nonNull(result)){
            Player player = new Player();
            List<Player> players = new ArrayList<>();
            List<Message> messages = new ArrayList<>();
            player.setUserId(result.getOwnerId());
            player.setUsername(userRepository.findOne(result.getOwnerId()).getUsername());
            player.setContestId(result.getId());
            players.add(player);
            result.setPlayers(players);
            result.setMessages(messages);
            return this.contestRepository.save(result);
        }
        return null;
    }

    public List<Player> getPlayersByContestId(Long contestId){
        Contest contest = contestRepository.findOne(contestId);
        return contest.getPlayers();
    }


    public Contest getContestById(Long contestId){
        return contestRepository.findOne(contestId);
    }

    public Contest deleteContest(Long contestId){
        Contest contest = contestRepository.findOne(contestId);
        contestRepository.delete(contest.getId());
        return contest;
    }

    public Player getPlayerByContestIdAndPlayerId(Long contestId,Long playerId){
        Contest contest = contestRepository.findOne(contestId);
        for(Player player : contest.getPlayers()) {
            if(player.getId().equals(playerId)) return player;
        }
        return null;
    }

    public Player addUserToContest(Long contestId, Long userId){
        Contest contest = contestRepository.findOne(contestId);
        User user = userRepository.findOne(userId);
        if(nonNull(contest) && nonNull(user)){
            Player player = new Player();
            player.setUserId(user.getId());
            player.setUsername(userRepository.findOne(userId).getUsername());
            player.setContestId(contest.getId());
            contest.getPlayers().add(player);
            contestRepository.save(contest);
            return player;
        }
        return null;

    }

    public List<Contest> getContestPlayedByUser(Long userId){
        List<Player> players = playerRepository.findAllByUserId(userId);
        List<Contest> result = new ArrayList<>();
        players.forEach(e -> {
            result.add(contestRepository.findOne(e.getContestId()));
        });
        return result;
    }

    public Player deletePlayerFromContest(Long contestId,Long playerId){
        Contest contest = contestRepository.findOne(contestId);
        Player player = playerRepository.findOne(playerId);
        contest.getPlayers().remove(player);
        return player;
    }



    public boolean existUserInContest(Long userId,Long contestId){
        List<Player> players = this.getPlayersByContestId(contestId);
        for(Player player : players){
            if (player.getUserId().equals(userId)) return true;
        }
        return false;
    }

    public boolean existContest(Long contestId){
        return this.contestRepository.exists(contestId);
    }

}
