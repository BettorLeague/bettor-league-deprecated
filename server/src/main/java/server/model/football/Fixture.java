package server.model.football;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "FIXTURE")
@Data
@NoArgsConstructor
@AllArgsConstructor
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

}
