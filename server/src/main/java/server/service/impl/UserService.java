package server.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import server.model.AuthorityName;
import server.model.User;
import server.repository.AuthorityRepository;
import server.repository.UserRepository;
import server.model.Authority;
import server.dto.JwtSignupRequest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class UserService implements server.service.UserService, UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;

    public UserService(UserRepository userRepository, AuthorityRepository authorityRepository){
        this.authorityRepository = authorityRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<List<User>> getAllUser() {
        List<User> users =  this.userRepository.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else
            return new ResponseEntity<>(users,HttpStatus.OK);
    }

    public ResponseEntity<User> getUser(Long id) {
        if (userRepository.exists(id)){
            return new ResponseEntity<User>(userRepository.findOne(id),HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<User> deleteUser(Long id) {
        if (userRepository.exists(id)){
            User user = userRepository.findOne(id);
            userRepository.delete(id);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<User> addUser(User user) {
        if (!userRepository.exists(user.getId())){
            userRepository.save(user);
            return new ResponseEntity<>(user,HttpStatus.CREATED);
        }else
            return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    public ResponseEntity<User> userSignUp(JwtSignupRequest jwtSignupRequest){
        if(userRepository.existsByUsername(jwtSignupRequest.getUsername()) || userRepository.existsByEmail(jwtSignupRequest.getEmail())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        User user = new User();
        user.setUsername(jwtSignupRequest.getUsername());
        user.setPassword(passwordEncoder.encode(jwtSignupRequest.getPassword()));
        user.setEmail(jwtSignupRequest.getEmail());
        user.setEnabled(true);
        List<Authority> authorities = new ArrayList<>();
        authorities.add(authorityRepository.findByName(AuthorityName.ROLE_USER));
        user.setAuthorities(authorities);
        userRepository.save(user);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    public ResponseEntity<List<Authority>> getAllAuthority() {
        List<Authority> authorities =  this.authorityRepository.findAll();
        if (authorities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else
            return new ResponseEntity<>(authorities,HttpStatus.OK);
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
            return org.springframework.security.core.userdetails.User//
                    .withUsername(username)//
                    .password(user.getPassword())//
                    .authorities(user.getAuthorities())//
                    .accountExpired(false)//
                    .accountLocked(false)//
                    .credentialsExpired(false)//
                    .disabled(false)//
                    .build();
        }
    }






}
