package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.Competition;
import server.model.Standing;


public interface StandingRepository extends JpaRepository<Standing, Long> {
    Standing findByTeamName(String teamName);
}
