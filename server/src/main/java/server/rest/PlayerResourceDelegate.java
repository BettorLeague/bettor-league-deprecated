package server.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import server.model.bettor.Player;
import server.model.bettor.Pronostic;
import server.model.user.User;
import server.security.JwtTokenUtil;
import server.service.ContestService;
import server.service.PlayerService;
import server.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Component
public class PlayerResourceDelegate {

    @Value("${jwt.header}")
    private String tokenHeader;

    private final UserService userService;
    private final JwtTokenUtil jwtTokenUtil;
    private final PlayerService playerService;
    private final ContestService contestService;

    public PlayerResourceDelegate(UserService userService,
                                ContestService contestService,
                                PlayerService playerService,
                                JwtTokenUtil jwtTokenUtil){
        this.userService = userService;
        this.playerService = playerService;
        this.contestService = contestService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    public ResponseEntity<List<Pronostic>> upadtePronostic(List<Pronostic> pronostics,Long contestId , HttpServletRequest request){

        String token = request.getHeader(tokenHeader);
        User user = userService.getUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
        if (isNull(user)){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }else {
            Player player = playerService.getPlayerByUserIdAndContestId(user.getId(),contestId);
            if(nonNull(player)){
                pronostics.forEach(e ->{
                    player.getPronostics().forEach(i -> {

                    });
                });
                return new ResponseEntity<>(HttpStatus.OK);
            }else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
