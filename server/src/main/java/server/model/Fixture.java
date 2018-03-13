package server.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.ManyToAny;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "FIXTURE")
public class Fixture {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "COMPETITION_ID")
    private Long competitionId;

    @Column(name = "DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;


    @Column(name = "STATUS", length = 30)
    @NotNull
    private String status;


    @Column(name = "MATCH_DAY")
    @NotNull
    private int matchday;


    @Column(name = "HOME_TEAM_NAME", length = 50)
    @NotNull
    private String homeTeamName;


    @Column(name = "AWAY_TEAM_NAME", length = 50)
    @NotNull
    private String awayTeamName;


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "FIXTURE_RESULT",
            joinColumns = {@JoinColumn(name = "FIXTURE_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "RESULT_ID", referencedColumnName = "ID")})
    private Result result;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getMatchday() {
        return matchday;
    }

    public void setMatchday(int matchday) {
        this.matchday = matchday;
    }

    public String getHomeTeamName() {
        return homeTeamName;
    }

    public void setHomeTeamName(String homeTeamName) {
        this.homeTeamName = homeTeamName;
    }

    public String getAwayTeamName() {
        return awayTeamName;
    }

    public void setAwayTeamName(String awayTeamName) {
        this.awayTeamName = awayTeamName;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public Long getCompetitionId() {
        return competitionId;
    }

    public void setCompetitionId(Long competitionId) {
        this.competitionId = competitionId;
    }
}
