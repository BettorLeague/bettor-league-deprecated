package server.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.user.Authority;
import server.model.user.AuthorityName;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    Authority findByName(AuthorityName name);
}
