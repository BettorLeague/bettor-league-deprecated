package server.service;

import org.springframework.security.core.userdetails.UserDetails;
import server.dto.authentification.JwtSignupRequest;
import server.dto.user.UpdateUserInfoRequest;
import server.model.Authority;
import server.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUser();

    User getUser(Long id);
    User addUser(User user);
    User updateUserInfo(User user, UpdateUserInfoRequest userInfoRequest);
    void deleteUser(Long id);

    boolean existUser(Long userId);
    boolean existUserByUsername(String username);
    boolean existUserByEmail(String email);

    User getUserByEmail(String email);
    User getUserByUsername(String username);
    User getUserByUsernameOrEmail(String usernameOrEmail);

    List<Authority> getAllAuthority();

    UserDetails loadUserByUsername(String username);
    User signUp(JwtSignupRequest jwtSignupRequest);
}
