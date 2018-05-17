package server.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.dto.user.UpdateUserInfoRequest;
import server.dto.user.UserStatsResponse;
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

    @RequestMapping(path = "/api/user", method = RequestMethod.PATCH)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<User> updateUserInfo(@RequestBody UpdateUserInfoRequest user, HttpServletRequest request) {
        return userResourceDelegate.updateUser(user,request);
    }
    /*
    @RequestMapping(path = "/api/user", method = RequestMethod.PATCH)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<User> updateUserEmail(@RequestBody UpdateUserInfoRequest user, HttpServletRequest request) {
        return userResourceDelegate.updateUser(user,request);
    }*/

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


}
