package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.security.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    Authority findByName(String name);
}
