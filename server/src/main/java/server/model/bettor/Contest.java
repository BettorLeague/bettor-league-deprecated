package server.model.bettor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import server.model.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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

    @Column(name = "CAPTION")
    @NotNull
    private String caption;

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToOne(cascade = CascadeType.MERGE)
    @NotNull
    @JoinTable(name = "CONTEST_ADMIN",
            joinColumns = {@JoinColumn(name = "CONTEST_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "USER_ID", referencedColumnName = "ID")})
    private User user;

    @Column(name = "TYPE", length = 50)
    @NotNull
    @Enumerated(EnumType.STRING)
    private ContestType type;

    @Column(name = "COMPETITION_ID")
    @NotNull
    private Long competitionId;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "CONTEST_PLAYER",
            joinColumns = {@JoinColumn(name = "CONTEST_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "PLAYER_ID", referencedColumnName = "ID")})
    private List<Player> players;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "CONTEST_MESSAGE",
            joinColumns = {@JoinColumn(name = "CONTEST_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "MESSAGE_ID", referencedColumnName = "ID")})
    private List<Message> messages;



}
