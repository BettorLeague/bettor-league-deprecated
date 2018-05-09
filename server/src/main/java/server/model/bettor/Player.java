package server.model.bettor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "PLAYER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    @NotNull
    private Long userId;

    @Column(name = "USERNAME")
    @NotNull
    private String username;

    @Column(name = "CONTEST_ID")
    @NotNull
    private Long contestId;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "PLAYER_PRONOSTIC",
            joinColumns = {@JoinColumn(name = "PLAYER_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "PRONOSTIC_ID", referencedColumnName = "ID")})
    private List<Pronostic> pronostics;

    @Column(name = "POINTS")
    private int points;

    @Column(name = "GOOD_PRONOSTIC")
    private int goodPronostic;

    @Column(name = "EXACT_PRONOSTIC")
    private int exactPronostic;


}
