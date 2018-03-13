package server.model.football.request;

import server.model.Fixture;

import java.util.List;

public class FixtureRequest {
    private int count;
    private List<Fixture> fixtures;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<Fixture> getFixtures() {
        return fixtures;
    }

    public void setFixtures(List<Fixture> fixtures) {
        this.fixtures = fixtures;
    }
}
