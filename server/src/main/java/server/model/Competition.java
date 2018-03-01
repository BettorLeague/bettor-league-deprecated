package server.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import server.security.model.Authority;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "COMPETITION")
public class Competition {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CAPTION", length = 200, unique = true)
    @NotNull
    @Size(min = 4, max = 200)
    private String caption;

    @Column(name = "LEAGUE", length = 10)
    @NotNull
    @Size(min = 2, max = 10)
    private String league;

    @Column(name = "YEAR", length = 4)
    @NotNull
    @Size(min = 4, max = 4)
    private String year;

    @Column(name = "CURRENT_MATCH_DAY")
    @NotNull
    private int currentMatchday;

    @Column(name = "NUMBER_OF_MATCH_DAYS")
    @NotNull
    private int numberOfMatchdays;

    @Column(name = "NUMBER_OF_GAMES")
    @NotNull
    private int numberOfGames;

    @Column(name = "NUMBER_OF_TEAMS")
    @NotNull
    private int numberOfTeams;

    @Column(name = "LAST_UPDATED")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastUpdated;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "COMPETITION_TEAMS",
            joinColumns = {@JoinColumn(name = "COMPETITION_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "TEAM_ID", referencedColumnName = "ID")})
    @JsonIgnore
    private List<Team> teams;

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getLeague() {
        return league;
    }

    public void setLeague(String league) {
        this.league = league;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public int getCurrentMatchday() {
        return currentMatchday;
    }

    public void setCurrentMatchday(int currentMatchday) {
        this.currentMatchday = currentMatchday;
    }

    public int getNumberOfMatchdays() {
        return numberOfMatchdays;
    }

    public void setNumberOfMatchdays(int numberOfMatchdays) {
        this.numberOfMatchdays = numberOfMatchdays;
    }

    public int getNumberOfGames() {
        return numberOfGames;
    }

    public void setNumberOfGames(int numberOfGames) {
        this.numberOfGames = numberOfGames;
    }

    public int getNumberOfTeams() {
        return numberOfTeams;
    }

    public void setNumberOfTeams(int numberOfTeams) {
        this.numberOfTeams = numberOfTeams;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
