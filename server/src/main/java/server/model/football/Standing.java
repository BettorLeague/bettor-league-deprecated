package server.model.football;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


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

    @Column(name = "PLAYED_GAMES")
    private int playedGames;

    @Column(name = "CREST_URI")
    private String crestURI;

    @Column(name = "POINTS")
    private int points;

    @Column(name = "GOALS")
    private int goals;

    @Column(name = "GOALS_AGAINST")
    private int goalsAgainst;

    @Column(name = "GOAL_DIFFERENCE")
    private int goalDifference;


}
