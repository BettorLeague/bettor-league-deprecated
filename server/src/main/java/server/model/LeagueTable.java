package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "LEAGUE_TABLE")
public class LeagueTable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CAPTION", length = 50)
    @NotNull
    @Size(min = 4, max = 50)
    private String leagueCaption;

    @Column(name = "MATCH_DAY")
    @NotNull
    private int matchday;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "LEAGUE_TABLE_STANDING",
            joinColumns = {@JoinColumn(name = "LEAGUE_TABLE_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "STANDING_ID", referencedColumnName = "ID")})
    private List<Standing> standing;

    public String getLeagueCaption() {
        return leagueCaption;
    }

    public void setLeagueCaption(String leagueCaption) {
        this.leagueCaption = leagueCaption;
    }

    public int getMatchday() {
        return matchday;
    }

    public void setMatchday(int matchday) {
        this.matchday = matchday;
    }

    public List<Standing> getStanding() {
        return standing;
    }

    public void setStanding(List<Standing> standing) {
        this.standing = standing;
    }
}
