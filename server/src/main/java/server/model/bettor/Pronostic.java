package server.model.bettor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "PRONOSTIC")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pronostic {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FIXTURE_ID",unique = true)
    @NotNull
    private Long fixtureId;

    @Column(name = "GOALS_AWAY_TEAM")
    private int goalsAwayTeam;

    @Column(name = "GOALS_HOME_TEAM")
    private int goalsHomeTeam;




}
