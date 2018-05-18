package server.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.dto.user.*;
import server.model.bettor.Contest;
import server.model.bettor.Player;
import server.model.user.User;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class UserResource {

    private final UserResourceDelegate userResourceDelegate;

    public UserResource(UserResourceDelegate userResourceDelegate){
        this.userResourceDelegate = userResourceDelegate;
    }

    @RequestMapping(path = "/api/user/info", method = RequestMethod.PATCH)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<User> updateUserInfo(@RequestBody UpdateUserInfoRequest user, HttpServletRequest request) {
        return userResourceDelegate.updateUser(user,request);
    }

    @RequestMapping(path = "/api/user/email", method = RequestMethod.PATCH)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> updateUserEmail(@RequestBody UpdateUserEmailRequest user, HttpServletRequest request) {
        return new ResponseEntity<>("not implemented", HttpStatus.OK);
    }

    @RequestMapping(path = "/api/user/password", method = RequestMethod.PATCH)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> updatePassword(@RequestBody UpdateUserPasswordRequest user, HttpServletRequest request) {
        return new ResponseEntity<>("not implemented", HttpStatus.OK);
    }

    @RequestMapping(path = "/api/user", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<User> getUser(HttpServletRequest request) {
        return userResourceDelegate.getUser(request);
    }

    @RequestMapping(path = "/api/user", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<User> deleteAccount(HttpServletRequest request) {
        return userResourceDelegate.deleteUser(request);
    }

    @RequestMapping(path = "/api/user/players", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Player>> getPlayers(HttpServletRequest request) {
        return userResourceDelegate.getAllPlayerByUser(request);
    }

    @RequestMapping(path = "/api/user/stats", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<UserStatsResponse> getUserStats(HttpServletRequest request) {
        return userResourceDelegate.getUserStats(request);
    }

    @RequestMapping(path = "/api/user/contest", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Contest>> getUserContests(HttpServletRequest request) {
        return userResourceDelegate.getUserContests(request);
    }

    @RequestMapping(path = "/api/user/contest", method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> addPrivateContest(@RequestBody PrivateContestRequest privateContestRequest, HttpServletRequest request) {
        return userResourceDelegate.addPrivateContest(privateContestRequest,request);
    }

    @RequestMapping(path = "/api/user/contest/{contestId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Contest> deletePrivateContest(@PathVariable("contestId") Long contestId,HttpServletRequest request) {
        return userResourceDelegate.deletePrivateContest(contestId,request);
    }

    @RequestMapping(path = "/api/user/contest/{contestId}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> signupContest(@PathVariable("contestId") Long contestId,HttpServletRequest request) {
        return userResourceDelegate.signupContest(contestId,request);
    }

    @RequestMapping(path = "/api/user/contest/{contestId}/{playerId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Player> deletePlayerFromContest(@PathVariable("contestId") Long contestId,@PathVariable("playerId") Long playerId,HttpServletRequest request) {
        return userResourceDelegate.deletePlayerFromContest(contestId,playerId,request);
    }


}
