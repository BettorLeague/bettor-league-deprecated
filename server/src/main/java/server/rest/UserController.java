package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.User;
import server.security.model.Authority;
import server.service.UserService;

import javax.inject.Inject;
import java.util.List;

@RestController
public class UserController {

    @Inject
    private UserService userService;



    @RequestMapping(path = "/api/user/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getAllUser() {
        return this.userService.getAllUser();
    }

    @RequestMapping(path = "/api/user/{userId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> deleteUser(@PathVariable Long userId) {
        return this.userService.deleteUser(userId);
    }

    @RequestMapping(path = "/api/user/add", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }

    @RequestMapping(path = "/api/user/{userId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        return this.userService.getUser(userId);
    }

    @RequestMapping(path = "/api/user/authorities", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Authority>> getAllAuthority() {
        return this.userService.getAllAuthority();
    }



}
