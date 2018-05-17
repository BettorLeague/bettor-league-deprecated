package server.social;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.UserProfile;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.NativeWebRequest;
import server.model.user.User;
import server.security.JwtTokenUtil;
import server.service.UserService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import static java.util.Objects.isNull;

@Service
@Slf4j
public class SocialSignInAdapter implements SignInAdapter {

    private UserService userService;
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    public SocialSignInAdapter(UserService userService, JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }


    @Override
    public String signIn(String localUserId, Connection<?> connection, NativeWebRequest request) {

        final UserProfile userProfile = connection.fetchUserProfile();

        User user = this.userService.getUserByUsernameOrEmail(localUserId);
        if (isNull(user)){
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", localUserId));
        }

        log.info("Existing person: {} Signin by email: {}", localUserId, userProfile.getEmail());


        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(user.getEmail(), null));


        HttpServletResponse response = request.getNativeResponse(HttpServletResponse.class);
        final String token = jwtTokenUtil.generateToken(user);

        Cookie authCookie = new Cookie("Authorization", token);
        authCookie.setPath( "/" );
        authCookie.setHttpOnly( false );
        response.addCookie(authCookie);

        return "/profile";
    }
}
