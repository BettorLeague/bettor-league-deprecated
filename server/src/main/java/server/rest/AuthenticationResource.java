package server.rest;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import server.dto.authentification.JwtAuthenticationRequest;
import server.model.user.User;
import server.security.JwtTokenUtil;
import server.dto.authentification.JwtAuthenticationResponse;
import server.dto.authentification.JwtSignupRequest;
import server.service.UserService;

import javax.servlet.http.HttpServletRequest;

import static java.util.Objects.isNull;

@RestController
public class AuthenticationResource {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "${jwt.route.authentication.path}", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest, Device device) throws AuthenticationException {
        User user = this.userService.getUserByUsernameOrEmail(authenticationRequest.getUsername());
        if (isNull(user)){
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", authenticationRequest.getUsername()));
        }
        // Perform the security
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        final String token = jwtTokenUtil.generateToken(user);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationResponse(token));
    }

    @RequestMapping(value = "${jwt.route.authentication.refresh}", method = RequestMethod.GET)
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        String authToken = request.getHeader(tokenHeader);
        if(authToken == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }else {
            String username = jwtTokenUtil.getUsernameFromToken(authToken);
            UserDetails user =  userService.loadUserByUsername(username);
            String refreshedToken = jwtTokenUtil.refreshToken(authToken);
            return ResponseEntity.ok(new JwtAuthenticationResponse(refreshedToken));
        }
    }

    @RequestMapping(value = "${jwt.route.authentication.current.user}", method = RequestMethod.GET)
    public ResponseEntity<?> getAuthenticatedUser(HttpServletRequest request) {
        String token = request.getHeader(tokenHeader);
        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }else {
            String username = jwtTokenUtil.getUsernameFromToken(token);
            User user = userService.getUserByUsername(username);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
    }

    @ApiResponses(value = {@ApiResponse(code = 409, message = "Username / Email is already in use")})
    @RequestMapping(value = "${jwt.route.authentication.signup}", method = RequestMethod.POST)
    public ResponseEntity<User> createUser(@RequestBody JwtSignupRequest jwtSignupRequest, Device device){
        if(userService.existUserByUsername(jwtSignupRequest.getUsername()) || userService.existUserByEmail(jwtSignupRequest.getEmail())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }else {
            return new ResponseEntity<>(userService.signUp(jwtSignupRequest),HttpStatus.OK);
        }
    }



}
