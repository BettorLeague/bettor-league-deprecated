package server.service.impl;

import org.springframework.stereotype.Component;
import server.model.bettor.Contest;
import server.model.bettor.ContestType;
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
}
