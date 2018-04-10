package server.model.football;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "RESULT")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(name = "GOALS_AWAY_TEAM")
    private int goalsAwayTeam;


    @Column(name = "GOALS_HOME_TEAM")
    private int goalsHomeTeam;

}
