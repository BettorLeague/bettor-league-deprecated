package server.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import server.model.Authority;
import server.model.User;
import server.service.UserService;

import java.util.List;

@Component
public class AdminResourceDelegate {

    private final UserService userService;

    public AdminResourceDelegate(UserService userService){
        this.userService = userService;
    }

    public ResponseEntity<List<User>> getAllUser(){
        return new ResponseEntity<>(this.userService.getAllUser(), HttpStatus.OK);
    }

    public ResponseEntity<User> deleteUser(Long userId){
        if(this.userService.existUser(userId)){
            User user = this.userService.getUser(userId);
            this.userService.deleteUser(userId);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<User> addUser(User user){
        if(this.userService.existUser(user.getId())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }else {
            return new ResponseEntity<>(this.userService.addUser(user),HttpStatus.OK);
        }
    }

    public ResponseEntity<User> getUserById(Long userId){
        if(this.userService.existUser(userId)){
            return new ResponseEntity<>(this.userService.getUser(userId),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List<Authority>> getAllAuthority(){
        return new ResponseEntity<>(this.userService.getAllAuthority(),HttpStatus.OK);
    }
}
