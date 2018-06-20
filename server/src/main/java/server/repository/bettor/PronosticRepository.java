package server.repository.bettor;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.bettor.Player;
import server.model.bettor.Pronostic;

import java.util.List;

public interface PronosticRepository extends JpaRepository<Pronostic, Long> {
}
