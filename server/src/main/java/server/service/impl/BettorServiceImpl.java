package server.service.impl;

import org.springframework.stereotype.Component;
import server.model.bettor.Contest;
import server.model.bettor.ContestType;
import server.model.bettor.Player;
import server.repository.bettor.ContestRepository;
import server.repository.football.CompetitionRepository;
import server.service.BettorService;

import java.util.List;

@Component
public class BettorServiceImpl implements BettorService{

    private final ContestRepository contestRepository;

    public BettorServiceImpl(ContestRepository contestRepository){
        this.contestRepository = contestRepository;
    }

    public List<Contest> getAllPublicContest(){
        return this.contestRepository.findAllByType(ContestType.PUBLIC);
    }

    public Contest addContest(Contest contest){
        return this.contestRepository.save(contest);
    }

    public List<Player> getPlayersByContestId(Long contestId){
        Contest contest = contestRepository.findOne(contestId);
        return contest.getPlayers();
    }

    public List<Contest> getAllPrivateContestByOwnerId(Long ownerId){
        return contestRepository.findAllByTypeAndOwnerId(ContestType.PRIVATE,ownerId);
    }
}
