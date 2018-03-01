package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.Competition;
import server.model.Team;


public interface TeamRepository extends JpaRepository<Team, Long> {
    Team findByName(String name);
}
