package server.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import server.model.bettor.Contest;
import server.model.bettor.Player;
import server.model.user.Authority;
import server.model.user.User;
import server.service.ContestService;
import server.service.UserService;

import java.util.List;

@Component
public class AdminResourceDelegate {

    private final UserService userService;
    private final ContestService contestService;

    public AdminResourceDelegate(UserService userService,
                                 ContestService contestService){
        this.userService = userService;
        this.contestService = contestService;
    }

    public ResponseEntity<List<User>> getAllUser(){
        return new ResponseEntity<>(this.userService.getAllUser(), HttpStatus.OK);
    }

    public ResponseEntity<User> deleteUser(Long userId){
        if(this.userService.existUser(userId)){
            return new ResponseEntity<>(this.userService.deleteUser(userId),HttpStatus.OK);
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

    public ResponseEntity<Contest> addContest(Contest contest) {
        return new ResponseEntity<>(this.contestService.addContest(contest), HttpStatus.OK);
    }

    public ResponseEntity<Contest> deleteContest(Long contestId) {
        return new ResponseEntity<>(this.contestService.deleteContest(contestId), HttpStatus.OK);
    }

    public ResponseEntity<Player> addPlayerByUserId(Long contestId,Long userId) {
        return new ResponseEntity<>(this.contestService.addUserToContest(contestId, userId), HttpStatus.OK);
    }

    public ResponseEntity<Player> deletePlayerFromContest(Long contestId,Long playerId) {
        return new ResponseEntity<>(this.contestService.deletePlayerFromContest(contestId,playerId),HttpStatus.NOT_FOUND);
    }
}
