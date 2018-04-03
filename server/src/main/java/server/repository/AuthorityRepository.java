package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.Authority;
import server.model.AuthorityName;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    Authority findByName(AuthorityName name);
}
