package server.repository.football;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.football.Competition;


public interface CompetitionRepository extends JpaRepository<Competition, Long> {
    Competition findByCaption(String caption);
}
