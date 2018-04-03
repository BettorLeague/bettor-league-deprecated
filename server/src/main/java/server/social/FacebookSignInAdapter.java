package server.social;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.UserProfile;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.web.context.request.NativeWebRequest;
import server.model.User;
import server.service.impl.UserService;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

public class FacebookSignInAdapter implements SignInAdapter {


    @Autowired
    UserService userService;

    @Override
    public String signIn(String localUserId, Connection<?> connection, NativeWebRequest request) {

        final UserProfile userProfile = connection.fetchUserProfile();

        User user = this.userService.getUserByEmail(connection.getDisplayName());

        if(user == null){
            throw new UsernameNotFoundException("No user found");
        }

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(), null));
        HttpServletResponse response = request.getNativeResponse(HttpServletResponse.class);
        response.addHeader("lol","XD");
        return null;
    }
}
