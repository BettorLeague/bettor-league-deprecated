package server.service.impl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import server.dto.user.UpdateUserInfoRequest;
import server.model.user.AuthorityName;
import server.model.user.User;
import server.repository.user.AuthorityRepository;
import server.repository.user.UserRepository;
import server.model.user.Authority;
import server.dto.authentification.JwtSignupRequest;
import server.repository.football.TeamRepository;
import server.service.UserService;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    private PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;
    private final TeamRepository teamRepository;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           TeamRepository teamRepository,
                           AuthorityRepository authorityRepository){
        this.authorityRepository = authorityRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
    }


    public boolean existUser(Long userId){
        return this.userRepository.exists(userId);
    }
    public boolean existUserByUsername(String username){
        return this.userRepository.existsByUsername(username);
    }
    public boolean existUserByEmail(String email){
        return this.userRepository.existsByEmail(email);
    }

    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }
    public User getUser(Long id) {
        return userRepository.findOne(id);
    }
    public User deleteUser(Long id) {
        User user = userRepository.findOne(id);
        userRepository.delete(id);
        return user;
    }
    public User addUser(User user) {
        return userRepository.save(user);
    }
    public User updateUserInfo(User user, UpdateUserInfoRequest userInfoRequest){
        User current = userRepository.findOne(user.getId());
        current.setUsername(userInfoRequest.getUsername());
        current.setBirthDate(userInfoRequest.getBirthDate());
        current.setCountry(userInfoRequest.getCountry());
        current.setFavoriteTeam(teamRepository.findOne(userInfoRequest.getFavoriteTeamId()));
        current.setSex(userInfoRequest.getSex());
        return this.userRepository.save(current);
    }


    public List<Authority> getAllAuthority() {
        return this.authorityRepository.findAll();
    }

    public User getUserByEmail(String email){
        return this.userRepository.findByEmail(email);
    }
    public User getUserByUsername(String username){return this.userRepository.findByUsername(username);}
    public User getUserByUsernameOrEmail(String usernameOrEmail){return this.userRepository.findByEmailOrUsername(usernameOrEmail,usernameOrEmail);}

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return org.springframework.security.core.userdetails.User
                    .withUsername(username)
                    .password(user.getPassword())
                    .authorities(user.getAuthorities())
                    .accountExpired(false)
                    .accountLocked(false)
                    .credentialsExpired(false)
                    .disabled(false)
                    .build();
        }
    }

    public User signUp(JwtSignupRequest jwtSignupRequest){
        User user = new User();
        user.setUsername(jwtSignupRequest.getUsername());
        user.setPassword(this.passwordEncoder.encode(jwtSignupRequest.getPassword()));
        user.setEmail(jwtSignupRequest.getEmail());
        user.setEnabled(true);
        List<Authority> authorities = new ArrayList<>();
        authorities.add(authorityRepository.findByName(AuthorityName.ROLE_USER));
        user.setAuthorities(authorities);
        return userRepository.save(user);
    }






}
