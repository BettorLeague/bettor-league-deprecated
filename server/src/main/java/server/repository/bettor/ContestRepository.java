package server.repository.bettor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import server.model.bettor.Contest;
import server.model.bettor.ContestType;
import server.model.bettor.Player;

import java.util.List;

public interface ContestRepository extends JpaRepository<Contest, Long> {
    Contest findByOwnerId(Long id);
    List<Contest> findAllByType(ContestType type);
    List<Contest> findAllByTypeAndOwnerId(ContestType type,Long ownerId);
}
