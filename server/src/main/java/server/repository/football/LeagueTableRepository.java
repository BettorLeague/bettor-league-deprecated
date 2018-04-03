package server.repository.football;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.football.LeagueTable;

import java.util.List;


public interface LeagueTableRepository extends JpaRepository<LeagueTable, Long> {
    List<LeagueTable> findByLeagueCaption(String captionLeague);
    LeagueTable findByLeagueCaptionAndMatchday(String captionLeague,int matchDay);
}
