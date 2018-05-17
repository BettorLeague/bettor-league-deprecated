package server.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import server.dto.user.UpdateUserInfoRequest;
import server.model.User;

import javax.servlet.http.HttpServletRequest;

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
    /*
    @RequestMapping(path = "/api/user/stats", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getUserStats(HttpServletRequest request) {
        return new ResponseEntity(HttpStatus.OK);
    }*/




}
