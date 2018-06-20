package server.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import server.dto.user.PrivateContestRequest;
import server.dto.user.UpdateUserInfoRequest;
import server.dto.user.UserStatsResponse;
import server.model.bettor.Contest;
import server.model.bettor.ContestType;
import server.model.bettor.Player;
import server.model.user.User;
import server.security.JwtTokenUtil;
import server.service.ContestService;
import server.service.PlayerService;
import server.service.UserService;

import javax.servlet.http.HttpServletRequest;

import java.util.List;

import static java.util.Objects.nonNull;

@Component
public class UserResourceDelegate {


    @Value("${jwt.header}")
    private String tokenHeader;

    private final UserService userService;
    private final JwtTokenUtil jwtTokenUtil;
    private final PlayerService playerService;
    private final ContestService contestService;

    public UserResourceDelegate(UserService userService,
                                ContestService contestService,
                                PlayerService playerService,
                                JwtTokenUtil jwtTokenUtil){
        this.userService = userService;
        this.playerService = playerService;
        this.contestService = contestService;
        this.jwtTokenUtil = jwtTokenUtil;
    }


    public ResponseEntity<User> updateUser(UpdateUserInfoRequest userInfoRequest, HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        return new ResponseEntity<>(this.userService.updateUserInfo(user,userInfoRequest),HttpStatus.OK);

    }

    public ResponseEntity<User> getUser(HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        if (nonNull(user)){
            return new ResponseEntity<>(this.userService.getUser(user.getId()),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    public ResponseEntity<User> deleteUser(HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        if (nonNull(user)){
            this.userService.deleteUser(user.getId());
            return new ResponseEntity<>(user,HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    public ResponseEntity<List<Player>> getAllPlayerByUser(HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        return new ResponseEntity<>(playerService.getAllPlayerByUserId(user.getId()), HttpStatus.OK);
    }

    public ResponseEntity<UserStatsResponse> getUserStats(HttpServletRequest request){

        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));

        List<Player> players = playerService.getAllPlayerByUserId(user.getId());
        UserStatsResponse userStatsResponse = new UserStatsResponse();
        int nbProno = 0;
        int nbBon = 0;
        int nbExact = 0;
        for(Player player : players){
            nbProno += player.getPronostics().size();
            nbExact += player.getExactPronostic();
            nbBon += player.getGoodPronostic();
        }

        userStatsResponse.setExactPronostic(nbExact);
        userStatsResponse.setGoodPronostic(nbBon);
        userStatsResponse.setNumberPronostic(nbProno);

        return new ResponseEntity<>(userStatsResponse, HttpStatus.OK);
    }


    public ResponseEntity<List<Contest>> getUserContests(HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        return new ResponseEntity<>(contestService.getContestPlayedByUser(user.getId()), HttpStatus.OK);
    }

    public ResponseEntity<Contest> addPrivateContest(PrivateContestRequest privateContestRequest, HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        Contest contest = new Contest();
        contest.setOwnerId(user.getId());
        contest.setType(ContestType.PRIVATE);
        contest.setCaption(privateContestRequest.getCaption());
        contest.setCompetitionId(privateContestRequest.getCompetitionId());
        return new ResponseEntity<>(contestService.addContest(contest), HttpStatus.OK);
    }

    public ResponseEntity<Contest> deletePrivateContest(Long contestId,HttpServletRequest request){
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        Contest contest = contestService.getContestById(contestId);
        if(user.getId().equals(contest.getOwnerId())){
            return new ResponseEntity<>(contestService.deleteContest(contest.getId()),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    public ResponseEntity<Player> deletePlayerFromContest(Long contestId, Long playerId, HttpServletRequest request) {
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        Contest contest = contestService.getContestById(contestId);
        Player player = playerService.getPlayerById(playerId);
        if(contest.getOwnerId().equals(user.getId())){
            if(player.getUserId().equals(user.getId())){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }else {
                return new ResponseEntity<>(contestService.deletePlayerFromContest(contest.getId(),player.getId()),HttpStatus.OK);
            }
        }else{
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    public ResponseEntity<Player> signupContest(Long contestId,HttpServletRequest request) {
        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        Contest contest = contestService.getContestById(contestId);

        if(contestService.existUserInContest(user.getId(),contest.getId())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }else{
            return new ResponseEntity<>(contestService.addUserToContest(contest.getId(),user.getId()),HttpStatus.OK);
        }
    }
}
