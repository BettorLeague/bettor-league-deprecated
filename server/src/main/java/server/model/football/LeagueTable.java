package server.model.football;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "LEAGUE_TABLE")
@Data
@NoArgsConstructor
@AllArgsConstructor
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


}
