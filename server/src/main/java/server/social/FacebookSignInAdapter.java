package server.social;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.UserProfile;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.NativeWebRequest;
import server.model.User;
import server.security.JwtTokenUtil;
import server.service.impl.UserService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
@Service
public class FacebookSignInAdapter implements SignInAdapter {

    @Value("${app.url}")
    private String appUrl;

    private final UserService userService;

    private JwtTokenUtil jwtTokenUtil;

    public FacebookSignInAdapter(UserService userService,JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }


    @Override
    public String signIn(String localUserId, Connection<?> connection, NativeWebRequest request) {

        final UserProfile userProfile = connection.fetchUserProfile();

        User user = this.userService.getUserByEmail(userProfile.getEmail());

        if(user == null){
            throw new UsernameNotFoundException("No user found");
        }

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(), null));
        HttpServletResponse response = request.getNativeResponse(HttpServletResponse.class);

        final String token = jwtTokenUtil.generateToken(user);

        Cookie authCookie = new Cookie("Authorization", token);
        authCookie.setPath( "/" );
        authCookie.setHttpOnly( false );
        authCookie.setMaxAge( 80000000 );

        response.addCookie(authCookie);
        response.addHeader("Authorization",token);

        return appUrl+"/profile";
    }
}
