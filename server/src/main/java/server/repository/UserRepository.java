package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    User findByEmailOrUsername(String email,String username);
    User findByEmail(String email);
}
