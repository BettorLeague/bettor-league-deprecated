package server.social;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.social.connect.UserProfile;
import org.springframework.stereotype.Service;
import server.model.AuthorityName;
import server.model.User;
import server.repository.AuthorityRepository;
import server.repository.UserRepository;

import java.util.Arrays;

import static org.apache.commons.lang.RandomStringUtils.randomAlphabetic;

@Service
@RequiredArgsConstructor
@Slf4j
public class SocialConnectionSignup implements ConnectionSignUp {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public String execute(Connection<?> connection) {
        final UserProfile userProfile = connection.fetchUserProfile();
        User user = new User();
        user.setUsername(userProfile.getFirstName());
        user.setPassword(passwordEncoder.encode(randomAlphabetic(8)));
        user.setEmail(userProfile.getEmail());
        user.setFirstname(userProfile.getFirstName());
        user.setLastname(userProfile.getLastName());
        user.setEnabled(true);
        user.setAuthorities(Arrays.asList(authorityRepository.findByName(AuthorityName.ROLE_USER)));
        userRepository.save(user);
        return userProfile.getEmail();
    }
}
