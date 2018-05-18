package server.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.model.bettor.Contest;
import server.model.bettor.Player;
import server.model.user.Authority;
import server.model.user.User;

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

    @RequestMapping(path = "/api/admin/contest", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Contest> addContest(@RequestBody Contest contest) {
        return adminResourceDelegate.addContest(contest);
    }

    @RequestMapping(path = "/api/admin/contest/{contestId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Contest> deleteContest(@PathVariable("contestId") Long contestId) {
        return adminResourceDelegate.deleteContest(contestId);
    }

    @RequestMapping(path = "/api/admin/contest/{contestId}/players/{userId}", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Player> addPlayerByUserId(@PathVariable("contestId") Long contestId, @PathVariable("userId") Long userId) {
        return adminResourceDelegate.addPlayerByUserId(contestId,userId);
    }

    @RequestMapping(path = "/api/admin/contest/{contestId}/players/{playerId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Player> deletePlayerFromContest(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId) {
        return adminResourceDelegate.deletePlayerFromContest(contestId,playerId);
    }

}
