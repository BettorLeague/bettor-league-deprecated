package server.repository.football;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.football.Standing;


public interface StandingRepository extends JpaRepository<Standing, Long> {
    Standing findByTeamName(String teamName);
}
