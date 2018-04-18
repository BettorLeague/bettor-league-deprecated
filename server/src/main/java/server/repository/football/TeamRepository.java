package server.repository.football;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.football.Team;


public interface TeamRepository extends JpaRepository<Team, Long> {
    Team findByName(String name);
    boolean existsByName(String name);
}
