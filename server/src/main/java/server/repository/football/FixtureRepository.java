package server.repository.football;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.football.Fixture;

import java.util.List;


public interface FixtureRepository extends JpaRepository<Fixture, Long> {
    List<Fixture> findByCompetitionId(Long id);
    List<Fixture> findByCompetitionIdAndAndMatchday(Long id,int matchDay);
}