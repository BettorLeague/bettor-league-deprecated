package server.model.bettor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.model.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "CONTEST")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contest {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CAPTION", length = 200, unique = true)
    @NotNull
    @Size(min = 4, max = 200)
    private String caption;

    @Column(name = "TYPE", length = 50)
    @NotNull
    @Enumerated(EnumType.STRING)
    private ContestType type;

    @Column(name = "COMPETITION_ID")
    @NotNull
    private Long competitionId;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "CONTEST_PLAYER",
            joinColumns = {@JoinColumn(name = "CONTEST_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "PLAYER_ID", referencedColumnName = "ID")})
    private List<Player> players;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "CONTEST_MESSAGE",
            joinColumns = {@JoinColumn(name = "CONTEST_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "MESSAGE_ID", referencedColumnName = "ID")})
    private List<Message> messages;



}
