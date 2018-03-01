package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.Competition;
import server.model.User;


public interface CompetitionRepository extends JpaRepository<Competition, Long> {
    Competition findByCaption(String caption);
}
