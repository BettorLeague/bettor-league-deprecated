package server.service;

import server.model.bettor.Contest;

import java.util.List;

public interface BettorService {
    public List<Contest> getAllPublicContest();
}
