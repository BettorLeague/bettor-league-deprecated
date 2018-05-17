package server.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.user.User;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    User findByEmailOrUsername(String email,String username);
    User findByEmail(String email);

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
