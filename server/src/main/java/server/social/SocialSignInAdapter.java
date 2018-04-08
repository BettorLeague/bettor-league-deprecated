package server.social;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.UserProfile;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.NativeWebRequest;
import server.model.User;
import server.security.JwtTokenUtil;
import server.service.impl.UserServiceImpl;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Service
@Slf4j
public class SocialSignInAdapter implements SignInAdapter {

    private UserServiceImpl userServiceImpl;
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    public SocialSignInAdapter(UserServiceImpl userServiceImpl, JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.userServiceImpl = userServiceImpl;
    }


    @Override
    public String signIn(String localUserId, Connection<?> connection, NativeWebRequest request) {

        final UserProfile userProfile = connection.fetchUserProfile();

        User user = this.userServiceImpl.getUserByUsernameOrEmail(localUserId);

        log.info("Existing person: {} by username: {}", localUserId, userProfile.getEmail());


        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(), null));



        HttpServletResponse response = request.getNativeResponse(HttpServletResponse.class);
        final String token = jwtTokenUtil.generateToken(user);

        Cookie authCookie = new Cookie("Authorization", token);
        authCookie.setPath( "/" );
        authCookie.setHttpOnly( false );
        response.addCookie(authCookie);

        return "/profile";
    }
}
