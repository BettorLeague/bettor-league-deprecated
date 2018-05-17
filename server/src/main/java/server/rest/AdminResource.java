package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.Authority;
import server.model.User;

import java.util.List;

@RestController
public class AdminResource {

    private final AdminResourceDelegate adminResourceDelegate;

    public AdminResource(AdminResourceDelegate adminResourceDelegate){
        this.adminResourceDelegate = adminResourceDelegate;
    }

    @RequestMapping(path = "/api/admin/user/all", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getAllUser() {
        return this.adminResourceDelegate.getAllUser();
    }

    @RequestMapping(path = "/api/admin/user/{userId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> deleteUser(@PathVariable Long userId) {
        return this.adminResourceDelegate.deleteUser(userId);
    }

    @RequestMapping(path = "/api/admin/user/add", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return this.adminResourceDelegate.addUser(user);
    }

    @RequestMapping(path = "/api/admin/user/{userId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        return this.adminResourceDelegate.getUserById(userId);
    }

    @RequestMapping(path = "/api/admin/user/authorities", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Authority>> getAllAuthority() {
        return this.adminResourceDelegate.getAllAuthority();
    }
}
