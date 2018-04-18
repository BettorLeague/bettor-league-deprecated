package server.model.football;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;


@Entity
@Table(name = "STANDING")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Standing {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(name = "POSITION")
    private int position;

    @Column(name = "TEAM_NAME")
    private String teamName;

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(name = "STANDING_TEAM",
            joinColumns = {@JoinColumn(name = "STANDING_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "TEAM_ID", referencedColumnName = "ID")})
    private Team team;

    @Column(name = "PLAYED_GAMES")
    private int playedGames;

    @Column(name = "POINTS")
    private int points;

    @Column(name = "GOALS")
    private int goals;

    @Column(name = "GOALS_AGAINST")
    private int goalsAgainst;

    @Column(name = "GOAL_DIFFERENCE")
    private int goalDifference;

    @Column(name = "DRAWS")
    private int draws;

    @Column(name = "LOSSES")
    private int losses;

    @Column(name = "WINS")
    private int wins;

}
