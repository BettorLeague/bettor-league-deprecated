package server.model.football.request;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import server.model.Team;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TeamRequest {
    private int count;
    private List<Team> teams;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }
}
