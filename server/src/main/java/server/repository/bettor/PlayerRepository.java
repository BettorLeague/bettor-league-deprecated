package server.repository.bettor;



import org.springframework.data.jpa.repository.JpaRepository;
import server.model.bettor.Player;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findAllByContestId(Long contestId);
    List<Player> findAllByContestIdAndUserId(Long contestId,Long userId);
    List<Player> findAllByUserId(Long userId);
    Player findByUserIdAndContestId(Long userId,Long contestId);
}
