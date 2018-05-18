package server.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.model.football.Team;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "USER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User  {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME", length = 50, unique = true)
    @NotNull
    @Size(min = 4, max = 50)
    private String username;

    @JsonIgnore
    @Column(name = "PASSWORD", length = 100)
    @Size(min = 4, max = 100)
    private String password;

    @Column(name = "FIRSTNAME", length = 50)
    @Size(min = 4, max = 50)
    private String firstname;

    @Column(name = "LASTNAME", length = 50)
    @Size(min = 4, max = 50)
    private String lastname;

    @Column(name = "EMAIL", length = 50,unique = true)
    @NotNull
    @Size(min = 4, max = 50)
    private String email;

    @Column(name = "ENABLED")
    @NotNull
    private Boolean enabled;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "USER_AUTHORITY",
            joinColumns = {@JoinColumn(name = "USER_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "AUTHORITY_ID", referencedColumnName = "ID")})
    private List<Authority> authorities;

    @Column(name = "COUNTRY")
    private String country;

    @Column(name = "BIRTH_DATE")
    @Past
    @Temporal(TemporalType.TIMESTAMP)
    private Date birthDate;

    @Column(name = "SEX")
    @Enumerated(EnumType.STRING)
    private UserSex sex;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "FAVORITE_TEAM",
            joinColumns = {@JoinColumn(name = "USER_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "TEAM_ID", referencedColumnName = "ID")})
    private Team favoriteTeam;

    @Column(name = "QUOTE")
    private String quote;

    @Min(0)
    @Max(10)
    @Column(name = "LEVEL")
    private Long level;



}