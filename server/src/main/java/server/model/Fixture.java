package server.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @Column(name = "COMPETITION_ID",unique = true)
    private Long competitionId;

    @Column(name = "DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;


    @Column(name = "STATUS", length = 10)
    @NotNull
    private String status;


    @Column(name = "MATCH_DAY")
    @NotNull
    private int matchday;


    @Column(name = "HOME_TEAM_NAME", length = 20)
    @NotNull
    private String homeTeamName;


    @Column(name = "AWAY_TEAM_NAME", length = 20)
    @NotNull
    private String awayTeamName;
}
