package server.model.football;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "COMPETITION")
@Data
@NoArgsConstructor
@AllArgsConstructor
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

    @Column(name = "CREST_URL")
    private String crestUrl;

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

}
