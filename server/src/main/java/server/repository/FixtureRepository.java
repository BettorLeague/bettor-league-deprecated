package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.Competition;
import server.model.Fixture;

import java.util.List;


public interface FixtureRepository extends JpaRepository<Fixture, Long> {
    List<Fixture> findByCompetitionId(Long id);
    List<Fixture> findByCompetitionIdAndAndMatchday(Long id,int matchDay);
}
