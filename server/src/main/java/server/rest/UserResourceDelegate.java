package server.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import server.dto.user.UpdateUserInfoRequest;
import server.model.User;
import server.security.JwtTokenUtil;
import server.service.UserService;

import javax.servlet.http.HttpServletRequest;

import static java.util.Objects.nonNull;

@Component
public class UserResourceDelegate {


    @Value("${jwt.header}")
    private String tokenHeader;

    private final UserService userService;
    private final JwtTokenUtil jwtTokenUtil;

    public UserResourceDelegate(UserService userService, JwtTokenUtil jwtTokenUtil){
        this.userService = userService;
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
}
