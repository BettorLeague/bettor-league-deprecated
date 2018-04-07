package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.User;
import server.model.Authority;
import server.service.impl.UserServiceImpl;

import javax.inject.Inject;
import java.util.List;

@RestController
public class UserController {

    @Inject
    private UserServiceImpl userServiceImpl;



    @RequestMapping(path = "/api/user/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getAllUser() {
        return this.userServiceImpl.getAllUser();
    }

    @RequestMapping(path = "/api/user/{userId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> deleteUser(@PathVariable Long userId) {
        return this.userServiceImpl.deleteUser(userId);
    }

    @RequestMapping(path = "/api/user/add", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return this.userServiceImpl.addUser(user);
    }

    @RequestMapping(path = "/api/user/{userId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        return this.userServiceImpl.getUser(userId);
    }

    @RequestMapping(path = "/api/user/authorities", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Authority>> getAllAuthority() {
        return this.userServiceImpl.getAllAuthority();
    }



}
