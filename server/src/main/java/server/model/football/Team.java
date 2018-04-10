package server.model.football;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "TEAM")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Team {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", length = 50, unique = true)
    @NotNull
    @Size(min = 4, max = 50)
    private String name;

    @Column(name = "CODE", length = 10)
    @Size(min = 2, max = 10)
    private String code;

    @Column(name = "SHORT_NAME", length = 20)
    @Size(min = 2, max = 20)
    private String shortName;

    @Column(name = "CREST_URL")
    private String crestUrl;

    @Column(name = "SQUAD_MARKET_VALUE")
    private String squadMarketValue;
}
